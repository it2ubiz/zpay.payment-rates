const
      got = require('got'),
      format = require('../helpers/format'),
      logger = require('../modules/logger'),
      parser = require('xml2json'),
      errorList = require('../helpers/errorList'),
      CustomError = require('../modules/customError');

class PartnerRatesClient {
  constructor() {
    logger.log('debug',
      'Created partner rates client');
  }

  __request(url) {
    return got(url, {}).then(res => res.body)
      .catch((e) => {
        logger.log(
          'error',
          'Error at partner rates client request for URL %o. Error message: %o. Error body: %o',
          url,
          e.message,
          e.body
        );
        return format.error(409, 'Error at rate fetching');
      });
  }

  /**
   * Получить курсы по парам валют
   *
   * @param source
   * @param path
   * @param pairs
   */
  async getRates(source, pairs) {
    let data = await this.__request(source),
        results = [];

    if (!data || data === null) {
      throw new CustomError(errorList.RATES.INCORRECT_RESPONSE);
    }

    let { rates } = JSON.parse(parser.toJson(data));
    await Promise.all(rates.item.map(rate => {
      pairs.map(pair => {
        if (rate.from.toLowerCase() === pair.from && rate.to.toLowerCase() === pair.to) results.push(rate);
      });
    }));

    return results;
  }
}

module.exports = PartnerRatesClient;
