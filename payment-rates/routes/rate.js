const
      rate = require('../helpers.js'),
      RateModel = require('../db/models/rate').ModelRateItem,
      errorList = require('../helpers/errorList'),
      config = require('../configs/fetchers.config');

const logger = require('../modules/logger.js');

module.exports = function (req, res) {
  // TODO: Validate params value!
  if ((req.params.from != null) && (req.params.to != null)) {
    let pair = `${req.params.from}${req.params.to}`;
    RateModel.find({ from: req.params.from, to: req.params.to, source: config.sourceName }, null, { sort: { updated: -1 }, limit: 1 })
      .then(rate.format)
      .catch((e)=>{
        logger.log('error', 'Failed to find pair %s in DB. Error: %o', pair, e);
        res.json({ error: errorList.RATES.PAIR_NOT_FOUND });
      })
      .then(result=>res.json(result[0]));
  }
};
