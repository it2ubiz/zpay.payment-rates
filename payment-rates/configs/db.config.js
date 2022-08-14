module.exports = {
  uri: `mongodb://${process.env.DB_HOST}:27017/zpay`,
  mongooseOpt: {
    useNewUrlParser: true,
    autoReconnect: true,
    reconnectTries: 60,
    reconnectInterval: 5000,
    promiseLibrary: Promise,
    poolSize: 10,
    connectTimeoutMS: 15000,
    bufferMaxEntries: 10 // If not connected, return errors immediately rather than waiting for reconnect
  }
};
