const
      winston = require('winston'),
      {
        combine, label, printf, timestamp, splat
      } = winston.format,
      config = require('../configs/'),
      options = config.logger,
      WinstonSlacker = require('winston-slack-logger');
require('winston-daily-rotate-file');


let myFormat = printf(info => {
  return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
});

const customLevels = {
  levels: {
    auth: 0,
    error: 1,
    slack: 2,
    warn: 3,
    info: 4,
    verbose: 5,
    debug: 6,
    silly: 7
  }
};

let logger = winston.createLogger({
  format: combine(
    label({ label: 'payment-eth' }),
    splat(),
    timestamp(),
    myFormat
  ),
  levels: customLevels.levels,
  level: 'silly',
  transports: [
    new winston.transports.Console({
      level: 'silly',
      handleExceptions: true
    }),
    new (winston.transports.DailyRotateFile)({
      filename: options.files.filename,
      datePattern: options.files.datePattern,
      dirname: options.files.dirname,
      zippedArchive: options.files.zippedArchive,
      maxSize: options.files.maxSize,
      maxFiles: options.files.maxFiles
    }),
    ...(process.env.NODE_ENV == 'development' ? [] : [new WinstonSlacker({
      webhook: options.slack.webhook,
      channel: options.slack.channel,
      username: options.slack.username,
      handleExceptions: true,
      level: 'slack'
    })])
  ]
});

module.exports = logger;

/*Level of logging
{
  error: 0,
  warn: 1,
  info: 2,
  verbose: 3,
  debug: 4,
  silly: 5
}
*/
