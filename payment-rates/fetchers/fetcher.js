const sp = require('smartprice'),
      { payment, fetchers } = require('../configs'),
      logger = require('../modules/logger'),
      CustomError = require('../modules/customError'),
      FiatRatesClient = require('fiat-rates'),
      RateModel = require('../db/models/rate.js');
//   PartnerRatesClient = require('../modules/partner.rates.client');

// Криптовалютные пары [ 'BTC/USD', 'ETH/BTC', 'ETH/USD', ... ]
const fiatRatesClient = new FiatRatesClient(),
      fiatPairs = combineFiatPairs(),
      excludedCryptoExchanges = getCryptoExcludedExchanges();//,
//   partnerRatesClient = new PartnerRatesClient();

let cryptoPairs = fetchers.pairs.crypto.filter(pair => !pair.calc).map(pair => pair.subname);
let calcCryptoPairs = fetchers.pairs.crypto.filter(pair => pair.calc);

/**
 * Комбинирование фиатных пар валют
 * @returns {Array}
 */
function combineFiatPairs() {
  let includedPairs = fetchers.pairs.fiat.included;
  let excludedPairs = fetchers.pairs.fiat.excluded;
  let pairwise = [];

  includedPairs.map((pairFrom, index, originalCurrencies) => {
    originalCurrencies.map((pairTo) => {
      if (pairFrom !== pairTo) {
        pairwise.push({
          pair: `${pairFrom}${pairTo}`,
          from: pairFrom,
          to: pairTo
        });
      }
    });
  });

  // Удалить заблокированные пары валют
  if (excludedPairs.length > 0) {
    pairwise = pairwise.filter(pair => {
      return excludedPairs.indexOf(pair.pair) < 0;
    });
  }

  return pairwise;
}

/**
 * Получить массив исключенных бирж
 * @returns {*}
 */
function getCryptoExcludedExchanges() {
  let exchanges = fetchers.exchanges;

  // Получить список исключаемых бирж
  return exchanges
    .filter(exchange => {
      if (exchange.enabled === false) return exchange;
    })
    .map(exchange => exchange.name);
}

module.exports = {
  /**
   * Получить курсы криптовалютных пар
   * @returns {Promise<*[]>}
   */
  async getCryptoRates() {
    try {
      let data = [],
          result = [],
          rates = {};

      cryptoPairs = fetchers.pairs.crypto.filter(pair => !pair.calc).map(pair => pair.subname);

      if (cryptoPairs.length > 0) {
        rates = await sp.updatePrice(cryptoPairs, excludedCryptoExchanges);
      }

      // Подготовить ответ с данными криптовалютных пар
      data.push(rates);

      await Promise.all(data.map(item => {
        fetchers.pairs.crypto.map(pair => {
          if (!item[pair.subname]) {
            return { error: 'Fetching error', pair };
          }

          let values = item[pair.subname];

          pair.date = values.date;
          pair.adapter = 'smartprice';
          let fee = values.avgPrice * payment.fee;
          let rate = (values.avgPrice - fee).toFixed(8);
          if (isNaN(rate)) {
            return { error: 'Fetching error', pair };
          }

          result.push(this.prepareResponse(rate, pair));
        });
      }));

      // logger.log('debug', 'Got prepared crypto rates %o', result);

      return result.concat(await this.getCalcCryptoRates(result));
    } catch (e) {
      logger.log('error', 'Error inside get crypto pairs method %o', new CustomError(e));
      throw new CustomError(e);
    }
  },

  isEmpty(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }

    return true;
  },

  /**
   * Получить курсы калькулируемых криптовалютных пар
   *
   * @param rates
   * @returns {Promise<*>}
   */
  async getCalcCryptoRates(rates) {
    try {
      let result = await Promise.all(calcCryptoPairs.map(async pair => {
        let baseRate,
            secondRate,
            thirdRate,
            rate;

        baseRate = await this.getDatebaseRates(rates, pair.needs[0]);
        secondRate = await this.getDatebaseRates(rates, pair.needs[1]);
        if (pair.needs.length === 3) {
          thirdRate = await this.getDatebaseRates(rates, pair.needs[2]);
        }

        let
            base = !Number.isNaN(parseFloat(pair.needs[0])) ? pair.needs[0] : baseRate,
            second = !Number.isNaN(parseFloat(pair.needs[1])) ? pair.needs[1] : secondRate,
            third;

        if (thirdRate) third = !Number.isNaN(parseFloat(pair.needs[2])) ? pair.needs[2] : thirdRate;

        pair.date = new Date();
        pair.adapter = 'smartprice';

        if (pair.multiply) {
          rate = (base * 1.0) * (second * 1.0);
          if (third) rate *= (third * 1.0);
        } else {
          rate = (base * 1.0) / (second * 1.0);
          if (third) rate /= (third * 1.0);
        }

        let fee = rate * payment.fee;
        rate = (rate - fee).toFixed(8);
        if (isNaN(rate)) {
          return { error: 'Fetching error', pair };
        }

        return this.prepareResponse(rate, pair);
      }));

      // logger.log('debug', 'Got prepared calc crypto rates %o', result);

      return result;
    } catch (e) {
      logger.log('error', 'Error inside get calc crypto pairs method %o', new CustomError(e));
      throw new CustomError(e);
    }
  },

  /**
   * Получить актуальные рейты из БД и вернуть рейт
   *
   * @param rates
   * @param pair
   * @returns {Promise<Query|number|bigint|T|T|void|*|modelRateItem.rate|{type}>}
   */
  async getDatebaseRates(rates, pair) {
    try {
      let cryptoRates = await RateModel.ModelRateItem.find({ source: 'smartprice' }),
          fiatRates = await RateModel.ModelRateItem.find({ source: 'fixer' }),
          base = rates.find(rate => rate.name === pair);

      if (!base) base = cryptoRates.find(rate => rate.name === pair);
      if (!base) base = fiatRates.find(rate => rate.name === pair);
      if (base && base.rate) base = base.rate;

      return base;
    } catch (e) {
      logger.log('error', 'Error inside get rate actual rate method %o', new CustomError(e));
      throw new CustomError(e);
    }
  },

  /**
   * Получить курс фиатных пар
   *
   * @returns {Promise<any[]>}
   */
  async getFiatRates() {
    try {
      let rates = await Promise.all(fiatPairs.map(async pair => {
        let values = await fiatRatesClient.get({
          base: pair.from.toUpperCase(),
          symbols: [pair.to.toUpperCase()]
        });
        pair.date = new Date();
        pair.name = pair.pair;
        pair.adapter = 'fixer';

        let fee = values.rates[pair.to.toUpperCase()] * payment.fee;
        let rate = (values.rates[pair.to.toUpperCase()] - fee).toFixed(8);
        if (isNaN(rate)) {
          return { error: 'Fetching error', pair };
        }

        return this.prepareResponse(rate, pair);
      }));

      // logger.log('debug', 'Got prepared fiat rates %o', rates);

      return rates;
    } catch (e) {
      logger.log('error', 'Error inside get get fiat rates method %o', new CustomError(e));
      throw new CustomError(e);
    }
  },

  /**
   * Получить курс пар партнеров
   *
   * @returns {Promise<any[]>}
   */
  //   async getPartnerRates(source) {
  //     try {
  //       let pairs = await partnerRatesClient.getRates(source, fetchers.pairs.partner);

  //       let rates = pairs.map(pair => {
  //         pair.pair = `${pair.from}${pair.to}`;
  //         pair.date = new Date();
  //         pair.name = pair.pair;
  //         pair.adapter = source;

  //         let fee = Number(pair.out) * payment.fee;
  //         let rate = (Number(pair.out) + fee).toFixed(8);

  //         return this.prepareResponse(rate, pair);
  //       });

  //       // logger.log('debug', 'Got prepared partner rates %o', rates);

  //       return rates;
  //     } catch (e) {
  //       logger.log('error', 'Error inside get partner rates method %o', new CustomError(e));
  //       throw new CustomError(e);
  //     }
  //   },

  /**
   * Подготовка данных для ответа
   * @param rate
   * @param pair
   * @returns {{adapter: (string), rate: *, name: *, from: *, to: *, pair: *, timestamp: number}}
   */
  prepareResponse(rate, pair) {
    return {
      pair: pair.pair.toLowerCase(),
      rate: rate,
      timestamp: new Date(pair.date).getTime(),
      name: pair.name.toLowerCase(),
      from: pair.from.toLowerCase(),
      to: pair.to.toLowerCase(),
      adapter: pair.adapter || 'unknown'
    };
  }
};
