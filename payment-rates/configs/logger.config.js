module.exports = {
  slack: {
    webhook: `https://hooks.slack.com/services/${process.env.SLACK_TOKEN}`
  },
  all: {
    level: 'silly'
  },
  files: {
    dirname: 'logs',
    level: 'silly',
    filename: `zpay-${process.env.SERVICE_NAME}-%DATE%.log`,
    datepattern: 'DD-MM-YYYY',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
  },
  console: {
    level: 'silly'
  }
};
