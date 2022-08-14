require('dotenv-flow').config({ default_node_env: 'development' });

const
      config = require('./configs').db,
      CronJob = require('cron').CronJob,
      daemon = require('./daemon'),
      db = require('./db/init.js'),
      logger = require('./modules/logger.js');

let jobCryptoCurrencies = null;
let jobFiatCurrencies = null;


async function init() {
  try {
    await db.connect(config.uri);
    jobCryptoCurrencies = new CronJob(
      '*/90 * * * * *',
      ()=>daemon().catch((e) => {
        logger.log('error', 'Rates daemon occured eror: %o', e);
      }),
      null,
      true,
      'America/Los_Angeles'
    );

    jobFiatCurrencies = new CronJob(
      '*/90 * * * * *',
      ()=>daemon().catch((e) => {
        logger.log('error', 'Rates daemon occured eror: %o', e);
      }),
      null,
      true,
      'America/Los_Angeles'
    );
  } catch (e) {
    logger.log('error', 'Daemon MongoDB connect error : %o', e);
  }
}
let stop = () => {
  jobCryptoCurrencies.stop();
  jobFiatCurrencies.stop();
};

let start = () => {
  jobCryptoCurrencies.start();
  jobFiatCurrencies.start();
};
init();

module.exports = { init, start, stop };
