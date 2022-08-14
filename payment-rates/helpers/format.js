const
      errorList = require('./errorList.js'),
      logger = require('../modules/logger');
let
    error = (errorObj, append) => {
      let res = {
        result: 'error',
        code: errorObj.errorCode || null,
        message: errorObj.message || null
      };
      if (append) { Object.assign(res, append); }
      return res;
    },
    success = (append) => {
      append.result = 'ok';
      return append;
    },
    sendSuccess = (res, status = 200, append) => res.status(status).json(success(append || {})),
    sendError = (res, req, errorObj, append) => {
      logger.log('error',
        'Handle %o at %o: %o (IP: %s UA: %s)',
        errorObj.message || 'error',
        req.originalUrl,
        req.body || req.params,
        req.cf_ip,
        req.headers['user-agent']);
      res.status(errorObj.statusCode || 500).json(error(errorObj, append));
    };

module.exports = {
  error,
  errorList,
  sendError,
  sendSuccess
};
