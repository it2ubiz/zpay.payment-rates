const mongoose = require('mongoose'),
      config = require('../../configs');

require('../../helpers/round');


const modelRateItem = {
  pair: {
    type: 'string'
  },
  rate: {
    type: 'string'
  },
  updatedAt: {
    type: 'Date'
  },
  source: {
    type: 'string'
  },
  name: {
    type: 'string'
  },
  from: {
    type: 'string'
  },
  to: {
    type: 'string'
  }
};

const ModelRateItem = mongoose.model('rateModel', mongoose.Schema(modelRateItem));

module.exports = {
  ModelRateItem, //TO-DO Remove if don't need
  addRateString: function (tres) {
    return ModelRateItem.findOneAndUpdate(
      {
        pair: tres.pair,
        source: tres.adapter
      },
      {
        pair: tres.pair,
        source: tres.adapter,
        rate: Math.floor10(tres.rate, config.rates.rounding),
        updatedAt: tres.timestamp,
        name: tres.name,
        from: tres.from,
        to: tres.to
      },
      { upsert: true }
    );
  }
};
