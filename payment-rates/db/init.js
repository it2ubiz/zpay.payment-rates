const
      mongoose = require('mongoose'),
      mongooseLogger = require('./mongoose-logger'),
      logger = require('../modules/logger'),
      config = require('../configs');


mongoose.set('setDefaultsOnInsert', true);
//TODO: Add as schema plugin to some schemas
//mongoose.plugin(mongooseHidden);
mongoose.plugin(mongooseLogger);

mongoose.connection.on('connected', () => {
  logger.log('info', `[DB Info] Mongoose connected - name: ${config.service.name}, port: ${config.service.port}, to: ${config.db.uri}`);
});

mongoose.connection.on('error', (err) => {
  logger.log('error', `[DB Error] Mongoose connection - name: ${config.service.name}, port: ${config.service.port}, error: %o`, err);
});

mongoose.connection.on('disconnected', () => {
  logger.log('info', `[DB Info] Mongoose disconnected - name: ${config.service.name}, port: ${config.service.port}`);
});

process.once('SIGUSR2', async () => {
  await mongoose.connection.close();
  process.kill(process.pid, 'SIGUSR2');
});

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await mongoose.connection.close();
  process.exit(0);
});

module.exports = {
  mongoose,
  connect: (url) => mongoose.connect(url, config.db.mongooseOpt)
};
