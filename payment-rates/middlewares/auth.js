const
      serverSecret = (require('../configs/')).tokens.auth,
      logger = require('../modules/logger'),
      errorList = require('../helpers/errorList');

function getIp(req) {
  return req.headers['CF-Connecting-IP']
        || req.headers['x-forwarded-for']
        || req.connection.remoteAddress;
}

module.exports = function (req, res, next) {
  let
      ip = getIp(req),
      clientSecret = req.headers.authorization;
  if (
    clientSecret === serverSecret
  ) {
    next();
    logger.log('debug', `Successfull authenification from ${ip}`);
  } else {
    logger.log(
      'error',
      'Incorrect authenification at %s. Expected %s got %s from %s',
      req.originalUrl,
      serverSecret,
      clientSecret,
      ip
    );
    res.status(406).send({ error: [errorList.SERVICES.AUTH_ERROR] });
  }
};
