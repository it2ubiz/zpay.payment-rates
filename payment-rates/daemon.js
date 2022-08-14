const config = require('./configs'),
      RateModel = require('./db/models/rate.js'),
      logger = require('./modules/logger'),
      fetcher = require('./fetchers/fetcher'),
      CustomError = require('./modules/customError');


function updateRate(res) {
  return RateModel.addRateString(res)
    .catch((e) => {
      logger.log(
        'error',
        'DB Save Error on %s : %o',
        res.adapter, e
      );
    });
}

function sendError(res) {
  // logger.log('error', 'Fetcher pair %o error. Error: %o', res.pair, res.error);
}

async function process() {
  try {
    let cryptoRates = await fetcher.getCryptoRates(),
        cryptoResult;

    if (cryptoRates) {
      cryptoResult = await Promise.all(cryptoRates.map((rate) => {
        if (rate.error) {
          sendError(rate);
          return false;
        }

        return updateRate(rate);
      }));
    }

    let fiatRates = await fetcher.getFiatRates(),
        fiatResult;

    if (fiatRates) {
      fiatResult = await Promise.all(fiatRates.map((rate) => {
        if (rate.error) {
          sendError(rate);
          return false;
        }

        return updateRate(rate);
      }));
    }

    // let partnerRates = await fetcher.getPartnerRates('https://betatransfer.net/request-exportxml.xml'),
    //     partnerResult;

    // if (partnerRates) {
    //   partnerResult = await Promise.all(partnerRates.map((rate) => {
    //     if (rate.error) {
    //       sendError(rate);
    //       return false;
    //     }

    //     return updateRate(rate);
    //   }));
    // }

    return { cryptoResult, fiatResult }; //, partnerResult };
  } catch (e) {
    logger.log('error', 'Error inside daemon process method %o', new CustomError(e));
    return new CustomError(e);
  }
}

module.exports = process;
