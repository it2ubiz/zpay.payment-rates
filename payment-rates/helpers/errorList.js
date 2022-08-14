module.exports = {
  /* 1 - 29 */
  WEB: {
    INTERNAL: { errorCode: 1, statusCode: 500, message: 'Internal service error' },
    INCORRECT_SCHEMA: { errorCode: 2, statusCode: 500, message: 'Incorrect schema or path' },
    VALIDATION_ERROR: { errorCode: 3, statusCode: 500, message: 'Validation error' } // Change
  },
  /* 30 - 49 */
  DB: {
    CONNECT: { errorCode: 30, statusCode: 500, message: 'DB connect error' },
    READ: { errorCode: 31, statusCode: 500, message: 'DB read error' },
    WRITE: { errorCode: 32, statusCode: 500, message: 'DB write error' },
    VALIDATION: { errorCode: 33, statusCode: 500, message: 'DB Validation error' }
  },
  /* 50 - 64 */
  AUTH: {
    NOT_AUTHORIZED: { errorCode: 50, statusCode: 406, message: 'Cheque not authorized' },
    INCORRECT_SCHEMA: { errorCode: 51, statusCode: 416, message: 'Incorrect auth schema' },
    INCORRECT_SESSION: { errorCode: 52, statusCode: 406, message: 'Incorrect session' },
    INCORRECT_VALUE: { errorCode: 53, statusCode: 406, message: 'Incorrect auth value' }
  },
  /* 65 - 74 */
  CHEQUE: {
    EXPIRED: { errorCode: 65, statusCode: 403, message: 'Cheque expired' },
    DISABLED: { errorCode: 66, statusCode: 423, message: 'Cheque disabled' },
    INVALID: { errorCode: 67, statusCode: 416, message: 'Incorrect cheque' },
    NOT_ACTIVE: { errorCode: 68, statusCode: 416, message: 'Cheque not active' }
  },
  CURRENCY: {
    INCORRECT: { errorCode: 75, statusCode: 416, message: 'Incorrect currency' }
  },
  /* 90 - 109 */
  SERVICES: {
    SERVICE_UNAVAILABLE: { errorCode: 90, statusCode: 500, message: 'Service unavailable' },
    AUTH_ERROR: { errorCode: 91, statusCode: 416, message: 'Auth error' },
    INTERNAL_ERROR: { errorCode: 92, statusCode: 500, message: 'Internal service error' }
  },
  /* 110 - 120 */
  RATES: {
    PAIR_NOT_FOUND: { errorCode: 110, statusCode: 500, message: 'Rate for pair not found' },
    RATE_OUTDATED: { errorCode: 111, statusCode: 500, message: 'Payment rates outdated' },
    INCORRECT_RESPONSE: { errorCode: 112, statusCode: 500, message: 'Incorrect response for payment rates' }
  },
  /* 120 - 150 */
  PAYMENT: {
    SERVICE_UNAVAILABLE: { errorCode: 120, statusCode: 500, message: 'Service unavailable' },
    INCORRECT_RESPONSE: { errorCode: 121, statusCode: 500, message: 'Incorrect response' },
    INSUFFIENT_RESERVE: { errorCode: 122, statusCode: 416, message: 'Insufficient reserve' },
    INCORRECT_RECEIVER: { errorCode: 123, statusCode: 416, message: 'Incorrect receiver address' },
    INCORRECT_AMOUNT: { errorCode: 124, statusCode: 416, message: 'Incorrect wallet amount' },
    WALLET_CREATION: { errorCode: 125, statusCode: 500, message: 'Error at wallet creation' },
    INCORRECT_AMOUNT_MIN: { errorCode: 126, statusCode: 416, message: 'Withdraw amount lower than min amount' },
    INCORRECT_AMOUNT_MAX: { errorCode: 127, statusCode: 416, message: 'Withdraw amount greater than max amount' },
    TX_ALREADY_PROCESSED: { errorCode: 128, statusCode: 416, message: 'Tx already processed' }
  },
  WALLETS: {
    MAX_COUNT: { errorCode: 151, statusCode: 416, message: 'Max wallet count reached' },
    INCORRECT: { errorCode: 152, statusCode: 416, message: 'Incorrect address value' },
    ALREADY_EXIST: { errorCode: 153, statusCode: 416, message: 'Wallet already exist' }
  }
};
