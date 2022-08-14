var
    RateModel = require('../db/models/rate').ModelRateItem,
    rate = require('../helpers.js'),
    errorList = require('../helpers/errorList'),
    config = require('../configs');

const logger = require('../modules/logger.js');
module.exports = function (req, res) {
  //TO-DO Need to refactor. Think about the way to get only one source between all available in DB
  RateModel.find({ source: config.sourceName }, null, { sort: { updated: -1, source: 1 } })
    .then(rate.format)
    .catch((err)=>{
      logger.log('error', 'Failed to fetch pairs in DB. Error: %o', err);
      res.json({ error: errorList.RATES.PAIR_NOT_FOUND });
    })
    .then(result=>res.json(result));
};
