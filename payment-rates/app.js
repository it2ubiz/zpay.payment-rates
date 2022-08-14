require('dotenv-flow').config({ default_node_env: 'development' });
const
      express = require('express'),
      app = express(),
      config = require('./configs/'),
      db = require('./db/init.js'),
      logger = require('./modules/logger.js'),
      auth = require('./middlewares/auth.js');

let router = express.Router();

router.use(auth);

router.get('/rates', require('./routes/rates.js'));
router.get('/rates/:from/:to', require('./routes/rate.js'));

app.disable('x-powered-by');
app.use(config.service.version, router);


function onSuccess() {
  logger.log(
    'info',
    '%s started on port %s',
    config.service.name,
    config.service.port
  );
}

function onError(e) {
  logger.error('[Express Error] Failed %s started on port %s: %o Error: %o.',
    config.service.name,
    config.service.port,
    e);
}

(async function init() {
  try {
    await db.connect(config.db.uri);
    app.listen(config.service.port, onSuccess).on('error', onError);
  } catch (e) {
    logger.log(
      'error',
      '[DB Error] Failed %s started on port %s: \r\nError: %o',
      config.service.name,
      config.service.port,
      e
    );
  }
}());
