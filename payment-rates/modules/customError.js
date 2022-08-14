class CustomError extends Error {
  constructor(args) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.name = args.name || 'CustomError';
    this.message = args.message;
    this.errorCode = args.errorCode;
    this.statusCode = args.statusCode;
  }
}

module.exports = CustomError;
