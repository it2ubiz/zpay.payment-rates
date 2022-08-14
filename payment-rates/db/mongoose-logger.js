const
      logger = require('../modules/logger');

module.exports = function (schema) {
  schema.post('validate', function (error, doc, next) {
    if (error.name) {
      logger.log('error', 'Error at validtation %o at document %o', error, doc);
    }
    next(error);
  });
  schema.post('save', function (error, doc, next) {
    if (error.name) {
      logger.log('error', 'Error at saving %o at document %o', error, doc);
    }
    if (next) next(error);
  });
  schema.post('update', function (error, doc, next) {
    if (error.name) {
      logger.log('error', 'Error at updating %o at document %o', error, doc);
    }
    if (next) next(error);
  });
};
