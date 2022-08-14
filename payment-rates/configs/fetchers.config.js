module.exports = {
  exchanges: [{
    name: 'bitstamp',
    enabled: true
  }, {
    name: 'kraken',
    enabled: true
  }, {
    name: 'bitfinex',
    enabled: true
  }, {
    name: 'poloniex',
    enabled: true
  }, {
    name: 'gemini',
    enabled: true
  }, {
    name: 'binance',
    enabled: true
  }, {
    name: 'gdax',
    enabled: false
  }, {
    name: 'dsx',
    enabled: false
  }, {
    name: 'huobipro',
    enabled: false
  }, {
    name: 'cexio',
    enabled: false
  }],
  pairs: {
    crypto: [{
      pair: 'btcusd',
      name: 'btcusd',
      subname: 'BTC/USD',
      from: 'btc',
      to: 'usd',
      calc: false,
      needs: []
    }, {
      pair: 'ethusd',
      name: 'ethusd',
      subname: 'ETH/USD',
      from: 'eth',
      to: 'usd',
      calc: false,
      needs: []
    }, {
      pair: 'ethbtc',
      name: 'ethbtc',
      subname: 'ETH/BTC',
      from: 'eth',
      to: 'btc',
      calc: true,
      needs: ['ethusd', 'btcusd']
    }, {
      pair: 'btceth',
      name: 'btceth',
      subname: 'BTC/ETH',
      from: 'btc',
      to: 'eth',
      calc: true,
      needs: ['btcusd', 'ethusd']
    }, {
      pair: 'usdbtc',
      name: 'usdbtc',
      subname: 'USD/BTC',
      from: 'usd',
      to: 'btc',
      calc: true,
      needs: [1, 'btcusd']
    }, {
      pair: 'usdeth',
      name: 'usdeth',
      subname: 'USD/ETH',
      from: 'usd',
      to: 'eth',
      calc: true,
      needs: [1, 'ethusd']
    }, {
      pair: 'rubeth',
      name: 'rubeth',
      subname: 'RUB/ETH',
      from: 'rub',
      to: 'eth',
      calc: true,
      needs: [1, 'ethusd', 'usdrub']
    }, {
      pair: 'rubbtc',
      name: 'rubbtc',
      subname: 'RUB/BTC',
      from: 'rub',
      to: 'btc',
      calc: true,
      needs: [1, 'btcusd', 'usdrub']
    }, {
      pair: 'ethrub',
      name: 'ethrub',
      subname: 'ETH/RUB',
      from: 'eth',
      to: 'rub',
      calc: true,
      needs: ['ethusd', 'usdrub', 1],
      multiply: true
    }, {
      pair: 'btcrub',
      name: 'btcrub',
      subname: 'BTC/RUB',
      from: 'btc',
      to: 'rub',
      calc: true,
      needs: ['btcusd', 'usdrub', 1],
      multiply: true
    }, {
      pair: 'eureth',
      name: 'eureth',
      subname: 'EUR/ETH',
      from: 'eur',
      to: 'eth',
      calc: true,
      needs: [1, 'ethusd', 'usdeur']
    }, {
      pair: 'eurbtc',
      name: 'eurbtc',
      subname: 'EUR/BTC',
      from: 'eur',
      to: 'btc',
      calc: true,
      needs: [1, 'btcusd', 'usdeur']
    }, {
      pair: 'etheur',
      name: 'etheur',
      subname: 'ETH/EUR',
      from: 'eth',
      to: 'eur',
      calc: true,
      needs: ['ethusd', 'usdeur', 1],
      multiply: true
    }, {
      pair: 'btceur',
      name: 'btceur',
      subname: 'BTC/EUR',
      from: 'btc',
      to: 'eur',
      calc: true,
      needs: ['btcusd', 'usdeur', 1],
      multiply: true
    }, {
      pair: 'cadeth',
      name: 'cadeth',
      subname: 'CAD/ETH',
      from: 'cad',
      to: 'eth',
      calc: true,
      needs: [1, 'ethusd', 'usdcad']
    }, {
      pair: 'cadbtc',
      name: 'cadbtc',
      subname: 'CAD/BTC',
      from: 'cad',
      to: 'btc',
      calc: true,
      needs: [1, 'btcusd', 'usdcad']
    }, {
      pair: 'ethcad',
      name: 'ethcad',
      subname: 'ETH/CAD',
      from: 'eth',
      to: 'cad',
      calc: true,
      needs: ['ethusd', 'usdcad', 1],
      multiply: true
    }, {
      pair: 'btccad',
      name: 'btccad',
      subname: 'BTC/CAD',
      from: 'btc',
      to: 'cad',
      calc: true,
      needs: ['btcusd', 'usdcad', 1],
      multiply: true
    }, {
      pair: 'audeth',
      name: 'audeth',
      subname: 'AUD/ETH',
      from: 'aud',
      to: 'eth',
      calc: true,
      needs: [1, 'ethusd', 'usdaud']
    }, {
      pair: 'audbtc',
      name: 'audbtc',
      subname: 'AUD/BTC',
      from: 'aud',
      to: 'btc',
      calc: true,
      needs: [1, 'btcusd', 'usdaud']
    }, {
      pair: 'ethaud',
      name: 'ethaud',
      subname: 'ETH/AUD',
      from: 'eth',
      to: 'aud',
      calc: true,
      needs: ['ethusd', 'usdaud', 1],
      multiply: true
    }, {
      pair: 'btcaud',
      name: 'btcaud',
      subname: 'BTC/AUD',
      from: 'btc',
      to: 'aud',
      calc: true,
      needs: ['btcusd', 'usdaud', 1],
      multiply: true
    }, {
      pair: 'gbpeth',
      name: 'gbpeth',
      subname: 'GBP/ETH',
      from: 'gbp',
      to: 'eth',
      calc: true,
      needs: [1, 'ethusd', 'usdgbp']
    }, {
      pair: 'gbpbtc',
      name: 'gbpbtc',
      subname: 'GBP/BTC',
      from: 'gbp',
      to: 'btc',
      calc: true,
      needs: [1, 'btcusd', 'usdgbp']
    }, {
      pair: 'ethgbp',
      name: 'ethgbp',
      subname: 'ETH/GBP',
      from: 'eth',
      to: 'gbp',
      calc: true,
      needs: ['ethusd', 'usdgbp', 1],
      multiply: true
    }, {
      pair: 'btcgbp',
      name: 'btcgbp',
      subname: 'BTC/GBP',
      from: 'btc',
      to: 'gbp',
      calc: true,
      needs: ['btcusd', 'usdgbp', 1],
      multiply: true
    }, {
      pair: 'ltcusd',
      name: 'ltcusd',
      subname: 'LTC/USD',
      from: 'ltc',
      to: 'usd',
      calc: false,
      needs: []
    }, {
      pair: 'usdltc',
      name: 'usdltc',
      subname: 'USD/LTC',
      from: 'usd',
      to: 'ltc',
      calc: true,
      needs: [1, 'ltcusd']
    }, {
      pair: 'ltcbtc',
      name: 'ltcbtc',
      subname: 'LTC/BTC',
      from: 'ltc',
      to: 'btc',
      calc: true,
      needs: ['ltcusd', 'btcusd']
    }, {
      pair: 'btcltc',
      name: 'btcltc',
      subname: 'BTC/LTC',
      from: 'btc',
      to: 'ltc',
      calc: true,
      needs: ['btcusd', 'ltcusd']
    }, {
      pair: 'ltceth',
      name: 'ltceth',
      subname: 'LTC/ETH',
      from: 'ltc',
      to: 'eth',
      calc: true,
      needs: ['ltcusd', 'ethusd']
    }, {
      pair: 'ethltc',
      name: 'ethltc',
      subname: 'ETH/LTC',
      from: 'eth',
      to: 'ltc',
      calc: true,
      needs: ['ethusd', 'ltcusd']
    }, {
      pair: 'btgusd',
      name: 'btgusd',
      subname: 'BTG/USD',
      from: 'btg',
      to: 'usd',
      calc: false,
      needs: []
    }, {
      pair: 'usdbtg',
      name: 'usdbtg',
      subname: 'USD/BTG',
      from: 'usd',
      to: 'btg',
      calc: true,
      needs: [1, 'btgusd']
    }, {
      pair: 'btgbtc',
      name: 'btgbtc',
      subname: 'BTG/BTC',
      from: 'btg',
      to: 'btc',
      calc: true,
      needs: ['btgusd', 'btcusd']
    }, {
      pair: 'btcbtg',
      name: 'btcbtg',
      subname: 'BTC/BTG',
      from: 'btc',
      to: 'btg',
      calc: true,
      needs: ['btcusd', 'btgusd']
    }, {
      pair: 'btgeth',
      name: 'btgeth',
      subname: 'BTG/ETH',
      from: 'btg',
      to: 'eth',
      calc: true,
      needs: ['btgusd', 'ethusd']
    }, {
      pair: 'ethbtg',
      name: 'ethbtg',
      subname: 'ETH/BTG',
      from: 'eth',
      to: 'btg',
      calc: true,
      needs: ['ethusd', 'btgusd']
    }, {
      pair: 'xrpusd',
      name: 'xrpusd',
      subname: 'XRP/USD',
      from: 'xrp',
      to: 'usd',
      calc: false,
      needs: []
    }, {
      pair: 'usdxrp',
      name: 'usdxrp',
      subname: 'USD/XRP',
      from: 'usd',
      to: 'xrp',
      calc: true,
      needs: [1, 'xrpusd']
    }, {
      pair: 'xrpbtc',
      name: 'xrpbtc',
      subname: 'XRP/BTC',
      from: 'xrp',
      to: 'btc',
      calc: true,
      needs: ['xrpusd', 'btcusd']
    }, {
      pair: 'btcxrp',
      name: 'btcxrp',
      subname: 'BTC/XRP',
      from: 'btc',
      to: 'xrp',
      calc: true,
      needs: ['btcusd', 'xrpusd']
    }, {
      pair: 'xrpeth',
      name: 'xrpeth',
      subname: 'XRP/ETH',
      from: 'xrp',
      to: 'eth',
      calc: true,
      needs: ['xrpusd', 'ethusd']
    }, {
      pair: 'ethxrp',
      name: 'ethxrp',
      subname: 'ETH/XRP',
      from: 'eth',
      to: 'xrp',
      calc: true,
      needs: ['ethusd', 'xrpusd']
    }, {
      pair: 'xlmusd',
      name: 'xlmusd',
      subname: 'XLM/USD',
      from: 'xlm',
      to: 'usd',
      calc: false,
      needs: []
    }, {
      pair: 'usdxlm',
      name: 'usdxlm',
      subname: 'USD/XLM',
      from: 'usd',
      to: 'xlm',
      calc: true,
      needs: [1, 'xlmusd']
    }, {
      pair: 'xlmbtc',
      name: 'xlmbtc',
      subname: 'XLM/BTC',
      from: 'xlm',
      to: 'btc',
      calc: true,
      needs: ['xlmusd', 'btcusd']
    }, {
      pair: 'btcxlm',
      name: 'btcxlm',
      subname: 'BTC/XLM',
      from: 'btc',
      to: 'xlm',
      calc: true,
      needs: ['btcusd', 'xlmusd']
    }, {
      pair: 'xlmeth',
      name: 'xlmeth',
      subname: 'XLM/ETH',
      from: 'xlm',
      to: 'eth',
      calc: true,
      needs: ['xlmusd', 'ethusd']
    }, {
      pair: 'ethxlm',
      name: 'ethxlm',
      subname: 'ETH/XLM',
      from: 'eth',
      to: 'xlm',
      calc: true,
      needs: ['ethusd', 'xlmusd']
    }, {
      pair: 'dashusd',
      name: 'dashusd',
      subname: 'DASH/USD',
      from: 'dash',
      to: 'usd',
      calc: false,
      needs: []
    }, {
      pair: 'usddash',
      name: 'usddash',
      subname: 'USD/DASH',
      from: 'usd',
      to: 'dash',
      calc: true,
      needs: [1, 'dashusd']
    }, {
      pair: 'dashbtc',
      name: 'dashbtc',
      subname: 'DASH/BTC',
      from: 'dash',
      to: 'btc',
      calc: true,
      needs: ['dashusd', 'btcusd']
    }, {
      pair: 'btcdash',
      name: 'btcdash',
      subname: 'BTC/DASH',
      from: 'btc',
      to: 'dash',
      calc: true,
      needs: ['btcusd', 'dashusd']
    }, {
      pair: 'dasheth',
      name: 'dasheth',
      subname: 'DASH/ETH',
      from: 'dash',
      to: 'eth',
      calc: true,
      needs: ['dashusd', 'ethusd']
    }, {
      pair: 'ethdash',
      name: 'ethdash',
      subname: 'ETH/DASH',
      from: 'eth',
      to: 'dash',
      calc: true,
      needs: ['ethusd', 'dashusd']
    }, {
      pair: 'xmrusd',
      name: 'xmrusd',
      subname: 'XMR/USD',
      from: 'xmr',
      to: 'usd',
      calc: false,
      needs: []
    }, {
      pair: 'usdxmr',
      name: 'usdxmr',
      subname: 'USD/XMR',
      from: 'usd',
      to: 'xmr',
      calc: true,
      needs: [1, 'xmrusd']
    }, {
      pair: 'xmrbtc',
      name: 'xmrbtc',
      subname: 'XMR/BTC',
      from: 'xmr',
      to: 'btc',
      calc: true,
      needs: ['xmrusd', 'btcusd']
    }, {
      pair: 'btcxmr',
      name: 'btcxmr',
      subname: 'BTC/XMR',
      from: 'btc',
      to: 'xmr',
      calc: true,
      needs: ['btcusd', 'xmrusd']
    }, {
      pair: 'xmreth',
      name: 'xmreth',
      subname: 'XMR/ETH',
      from: 'xmr',
      to: 'eth',
      calc: true,
      needs: ['xmrusd', 'ethusd']
    }, {
      pair: 'ethxmr',
      name: 'ethxmr',
      subname: 'ETH/XMR',
      from: 'eth',
      to: 'xmr',
      calc: true,
      needs: ['ethusd', 'xmrusd']
    }, {
      pair: 'zecusd',
      name: 'zecusd',
      subname: 'ZEC/USD',
      from: 'zec',
      to: 'usd',
      calc: false,
      needs: []
    }, {
      pair: 'usdzec',
      name: 'usdzec',
      subname: 'USD/ZEC',
      from: 'usd',
      to: 'zec',
      calc: true,
      needs: [1, 'zecusd']
    }, {
      pair: 'zecbtc',
      name: 'zecbtc',
      subname: 'ZEC/BTC',
      from: 'zec',
      to: 'btc',
      calc: true,
      needs: ['zecusd', 'btcusd']
    }, {
      pair: 'btczec',
      name: 'btczec',
      subname: 'BTC/ZEC',
      from: 'btc',
      to: 'zec',
      calc: true,
      needs: ['btcusd', 'zecusd']
    }, {
      pair: 'zeceth',
      name: 'zeceth',
      subname: 'ZEC/ETH',
      from: 'zec',
      to: 'eth',
      calc: true,
      needs: ['zecusd', 'ethusd']
    }, {
      pair: 'ethzec',
      name: 'ethzec',
      subname: 'ETH/ZEC',
      from: 'eth',
      to: 'zec',
      calc: true,
      needs: ['ethusd', 'zecusd']
    }, {
      pair: 'gbpltc',
      name: 'gbpltc',
      subname: 'GBP/LTC',
      from: 'gbp',
      to: 'ltc',
      calc: true,
      needs: [1, 'ltcusd', 'usdgbp']
    }, {
      pair: 'ltcgbp',
      name: 'ltcgbp',
      subname: 'LTC/GBP',
      from: 'ltc',
      to: 'gbp',
      calc: true,
      needs: ['ltcusd', 'usdgbp', 1],
      multiply: true
    }, {
      pair: 'gbpbtg',
      name: 'gbpbtg',
      subname: 'GBP/BTG',
      from: 'gbp',
      to: 'btg',
      calc: true,
      needs: [1, 'btgusd', 'usdgbp']
    }, {
      pair: 'btggbp',
      name: 'btggbp',
      subname: 'BTG/GBP',
      from: 'btg',
      to: 'gbp',
      calc: true,
      needs: ['btgusd', 'usdgbp', 1],
      multiply: true
    }, {
      pair: 'gbpxrp',
      name: 'gbpxrp',
      subname: 'GBP/XRP',
      from: 'gbp',
      to: 'xrp',
      calc: true,
      needs: [1, 'xrpusd', 'usdgbp']
    }, {
      pair: 'xrpgbp',
      name: 'xrpgbp',
      subname: 'XRP/GBP',
      from: 'xrp',
      to: 'gbp',
      calc: true,
      needs: ['xrpusd', 'usdgbp', 1],
      multiply: true
    }, {
      pair: 'gbpxlm',
      name: 'gbpxlm',
      subname: 'GBP/XLM',
      from: 'gbp',
      to: 'xlm',
      calc: true,
      needs: [1, 'xlmusd', 'usdgbp']
    }, {
      pair: 'xlmgbp',
      name: 'xlmgbp',
      subname: 'XLM/GBP',
      from: 'xlm',
      to: 'gbp',
      calc: true,
      needs: ['xlmusd', 'usdgbp', 1],
      multiply: true
    }, {
      pair: 'gbpdash',
      name: 'gbpdash',
      subname: 'GBP/DASH',
      from: 'gbp',
      to: 'dash',
      calc: true,
      needs: [1, 'dashusd', 'usdgbp']
    }, {
      pair: 'dashgbp',
      name: 'dashgbp',
      subname: 'DASH/GBP',
      from: 'dash',
      to: 'gbp',
      calc: true,
      needs: ['dashusd', 'usdgbp', 1],
      multiply: true
    }, {
      pair: 'gbpxmr',
      name: 'gbpxmr',
      subname: 'GBP/XMR',
      from: 'gbp',
      to: 'xmr',
      calc: true,
      needs: [1, 'xmrusd', 'usdgbp']
    }, {
      pair: 'xmrgbp',
      name: 'xmrgbp',
      subname: 'XMR/GBP',
      from: 'xmr',
      to: 'gbp',
      calc: true,
      needs: ['xmrusd', 'usdgbp', 1],
      multiply: true
    }, {
      pair: 'gbpzec',
      name: 'gbpzec',
      subname: 'GBP/ZEC',
      from: 'gbp',
      to: 'zec',
      calc: true,
      needs: [1, 'zecusd', 'usdgbp']
    }, {
      pair: 'zecgbp',
      name: 'zecgbp',
      subname: 'ZEC/GBP',
      from: 'zec',
      to: 'gbp',
      calc: true,
      needs: ['zecusd', 'usdgbp', 1],
      multiply: true
    }, {
      pair: 'cadltc',
      name: 'cadltc',
      subname: 'CAD/LTC',
      from: 'cad',
      to: 'ltc',
      calc: true,
      needs: [1, 'ltcusd', 'usdcad']
    }, {
      pair: 'ltccad',
      name: 'ltccad',
      subname: 'LTC/CAD',
      from: 'ltc',
      to: 'cad',
      calc: true,
      needs: ['ltcusd', 'usdcad', 1],
      multiply: true
    }, {
      pair: 'cadbtg',
      name: 'cadbtg',
      subname: 'CAD/BTG',
      from: 'cad',
      to: 'btg',
      calc: true,
      needs: [1, 'btgusd', 'usdcad']
    }, {
      pair: 'btgcad',
      name: 'btgcad',
      subname: 'BTG/CAD',
      from: 'btg',
      to: 'cad',
      calc: true,
      needs: ['btgusd', 'usdcad', 1],
      multiply: true
    }, {
      pair: 'cadxrp',
      name: 'cadxrp',
      subname: 'CAD/XRP',
      from: 'cad',
      to: 'xrp',
      calc: true,
      needs: [1, 'xrpusd', 'usdcad']
    }, {
      pair: 'xrpcad',
      name: 'xrpcad',
      subname: 'XRP/CAD',
      from: 'xrp',
      to: 'cad',
      calc: true,
      needs: ['xrpusd', 'usdcad', 1],
      multiply: true
    }, {
      pair: 'cadxlm',
      name: 'cadxlm',
      subname: 'CAD/XLM',
      from: 'cad',
      to: 'xlm',
      calc: true,
      needs: [1, 'xlmusd', 'usdcad']
    }, {
      pair: 'xlmcad',
      name: 'xlmcad',
      subname: 'XLM/CAD',
      from: 'xlm',
      to: 'cad',
      calc: true,
      needs: ['xlmusd', 'usdcad', 1],
      multiply: true
    }, {
      pair: 'caddash',
      name: 'caddash',
      subname: 'CAD/DASH',
      from: 'cad',
      to: 'dash',
      calc: true,
      needs: [1, 'dashusd', 'usdcad']
    }, {
      pair: 'dashcad',
      name: 'dashcad',
      subname: 'DASH/CAD',
      from: 'dash',
      to: 'cad',
      calc: true,
      needs: ['dashusd', 'usdcad', 1],
      multiply: true
    }, {
      pair: 'cadxmr',
      name: 'cadxmr',
      subname: 'CAD/XMR',
      from: 'cad',
      to: 'xmr',
      calc: true,
      needs: [1, 'xmrusd', 'usdcad']
    }, {
      pair: 'xmrcad',
      name: 'xmrcad',
      subname: 'XMR/CAD',
      from: 'xmr',
      to: 'cad',
      calc: true,
      needs: ['xmrusd', 'usdcad', 1],
      multiply: true
    }, {
      pair: 'cadzec',
      name: 'cadzec',
      subname: 'CAD/ZEC',
      from: 'cad',
      to: 'zec',
      calc: true,
      needs: [1, 'zecusd', 'usdcad']
    }, {
      pair: 'zeccad',
      name: 'zeccad',
      subname: 'ZEC/CAD',
      from: 'zec',
      to: 'cad',
      calc: true,
      needs: ['zecusd', 'usdcad', 1],
      multiply: true
    }, {
      pair: 'audltc',
      name: 'audltc',
      subname: 'AUD/LTC',
      from: 'aud',
      to: 'ltc',
      calc: true,
      needs: [1, 'ltcusd', 'usdaud']
    }, {
      pair: 'ltcaud',
      name: 'ltcaud',
      subname: 'LTC/AUD',
      from: 'ltc',
      to: 'aud',
      calc: true,
      needs: ['ltcusd', 'usdaud', 1],
      multiply: true
    }, {
      pair: 'audbtg',
      name: 'audbtg',
      subname: 'AUD/BTG',
      from: 'aud',
      to: 'btg',
      calc: true,
      needs: [1, 'btgusd', 'usdaud']
    }, {
      pair: 'btgaud',
      name: 'btgaud',
      subname: 'BTG/AUD',
      from: 'btg',
      to: 'aud',
      calc: true,
      needs: ['btgusd', 'usdaud', 1],
      multiply: true
    }, {
      pair: 'audxrp',
      name: 'audxrp',
      subname: 'AUD/XRP',
      from: 'aud',
      to: 'xrp',
      calc: true,
      needs: [1, 'xrpusd', 'usdaud']
    }, {
      pair: 'xrpaud',
      name: 'xrpaud',
      subname: 'XRP/AUD',
      from: 'xrp',
      to: 'aud',
      calc: true,
      needs: ['xrpusd', 'usdaud', 1],
      multiply: true
    }, {
      pair: 'audxlm',
      name: 'audxlm',
      subname: 'AUD/XLM',
      from: 'aud',
      to: 'xlm',
      calc: true,
      needs: [1, 'xlmusd', 'usdaud']
    }, {
      pair: 'xlmaud',
      name: 'xlmaud',
      subname: 'XLM/AUD',
      from: 'xlm',
      to: 'aud',
      calc: true,
      needs: ['xlmusd', 'usdaud', 1],
      multiply: true
    }, {
      pair: 'auddash',
      name: 'auddash',
      subname: 'AUD/DASH',
      from: 'aud',
      to: 'dash',
      calc: true,
      needs: [1, 'dashusd', 'usdaud']
    }, {
      pair: 'dashaud',
      name: 'dashaud',
      subname: 'DASH/AUD',
      from: 'dash',
      to: 'aud',
      calc: true,
      needs: ['dashusd', 'usdaud', 1],
      multiply: true
    }, {
      pair: 'audxmr',
      name: 'audxmr',
      subname: 'AUD/XMR',
      from: 'aud',
      to: 'xmr',
      calc: true,
      needs: [1, 'xmrusd', 'usdaud']
    }, {
      pair: 'xmraud',
      name: 'xmraud',
      subname: 'XMR/AUD',
      from: 'xmr',
      to: 'aud',
      calc: true,
      needs: ['xmrusd', 'usdaud', 1],
      multiply: true
    }, {
      pair: 'audzec',
      name: 'audzec',
      subname: 'AUD/ZEC',
      from: 'aud',
      to: 'zec',
      calc: true,
      needs: [1, 'zecusd', 'usdaud']
    }, {
      pair: 'zecaud',
      name: 'zecaud',
      subname: 'ZEC/AUD',
      from: 'zec',
      to: 'aud',
      calc: true,
      needs: ['zecusd', 'usdaud', 1],
      multiply: true
    }, {
      pair: 'eurltc',
      name: 'eurltc',
      subname: 'EUR/LTC',
      from: 'eur',
      to: 'ltc',
      calc: true,
      needs: [1, 'ltcusd', 'usdeur']
    }, {
      pair: 'ltceur',
      name: 'ltceur',
      subname: 'LTC/EUR',
      from: 'ltc',
      to: 'eur',
      calc: true,
      needs: ['ltcusd', 'usdeur', 1],
      multiply: true
    }, {
      pair: 'eurbtg',
      name: 'eurbtg',
      subname: 'EUR/BTG',
      from: 'eur',
      to: 'btg',
      calc: true,
      needs: [1, 'btgusd', 'usdeur']
    }, {
      pair: 'btgeur',
      name: 'btgeur',
      subname: 'BTG/EUR',
      from: 'btg',
      to: 'eur',
      calc: true,
      needs: ['btgusd', 'usdeur', 1],
      multiply: true
    }, {
      pair: 'eurxrp',
      name: 'eurxrp',
      subname: 'EUR/XRP',
      from: 'eur',
      to: 'xrp',
      calc: true,
      needs: [1, 'xrpusd', 'usdeur']
    }, {
      pair: 'xrpeur',
      name: 'xrpeur',
      subname: 'XRP/EUR',
      from: 'xrp',
      to: 'eur',
      calc: true,
      needs: ['xrpusd', 'usdeur', 1],
      multiply: true
    }, {
      pair: 'eurxlm',
      name: 'eurxlm',
      subname: 'EUR/XLM',
      from: 'eur',
      to: 'xlm',
      calc: true,
      needs: [1, 'xlmusd', 'usdeur']
    }, {
      pair: 'xlmeur',
      name: 'xlmeur',
      subname: 'XLM/EUR',
      from: 'xlm',
      to: 'eur',
      calc: true,
      needs: ['xlmusd', 'usdeur', 1],
      multiply: true
    }, {
      pair: 'eurdash',
      name: 'eurdash',
      subname: 'EUR/DASH',
      from: 'eur',
      to: 'dash',
      calc: true,
      needs: [1, 'dashusd', 'usdeur']
    }, {
      pair: 'dasheur',
      name: 'dasheur',
      subname: 'DASH/EUR',
      from: 'dash',
      to: 'eur',
      calc: true,
      needs: ['dashusd', 'usdeur', 1],
      multiply: true
    }, {
      pair: 'eurxmr',
      name: 'eurxmr',
      subname: 'EUR/XMR',
      from: 'eur',
      to: 'xmr',
      calc: true,
      needs: [1, 'xmrusd', 'usdeur']
    }, {
      pair: 'xmreur',
      name: 'xmreur',
      subname: 'XMR/EUR',
      from: 'xmr',
      to: 'eur',
      calc: true,
      needs: ['xmrusd', 'usdeur', 1],
      multiply: true
    }, {
      pair: 'eurzec',
      name: 'eurzec',
      subname: 'EUR/ZEC',
      from: 'eur',
      to: 'zec',
      calc: true,
      needs: [1, 'zecusd', 'usdeur']
    }, {
      pair: 'zeceur',
      name: 'zeceur',
      subname: 'ZEC/EUR',
      from: 'zec',
      to: 'eur',
      calc: true,
      needs: ['zecusd', 'usdeur', 1],
      multiply: true
    }, {
      pair: 'rubltc',
      name: 'rubltc',
      subname: 'RUB/LTC',
      from: 'rub',
      to: 'ltc',
      calc: true,
      needs: [1, 'ltcusd', 'usdrub']
    }, {
      pair: 'ltcrub',
      name: 'ltcrub',
      subname: 'LTC/RUB',
      from: 'ltc',
      to: 'rub',
      calc: true,
      needs: ['ltcusd', 'usdrub', 1],
      multiply: true
    }, {
      pair: 'rubbtg',
      name: 'rubbtg',
      subname: 'RUB/BTG',
      from: 'rub',
      to: 'btg',
      calc: true,
      needs: [1, 'btgusd', 'usdrub']
    }, {
      pair: 'btgrub',
      name: 'btgrub',
      subname: 'BTG/RUB',
      from: 'btg',
      to: 'rub',
      calc: true,
      needs: ['btgusd', 'usdrub', 1],
      multiply: true
    }, {
      pair: 'rubxrp',
      name: 'rubxrp',
      subname: 'RUB/XRP',
      from: 'rub',
      to: 'xrp',
      calc: true,
      needs: [1, 'xrpusd', 'usdrub']
    }, {
      pair: 'xrprub',
      name: 'xrprub',
      subname: 'XRP/RUB',
      from: 'xrp',
      to: 'rub',
      calc: true,
      needs: ['xrpusd', 'usdrub', 1],
      multiply: true
    }, {
      pair: 'rubxlm',
      name: 'rubxlm',
      subname: 'RUB/XLM',
      from: 'rub',
      to: 'xlm',
      calc: true,
      needs: [1, 'xlmusd', 'usdrub']
    }, {
      pair: 'xlmrub',
      name: 'xlmrub',
      subname: 'XLM/RUB',
      from: 'xlm',
      to: 'rub',
      calc: true,
      needs: ['xlmusd', 'usdrub', 1],
      multiply: true
    }, {
      pair: 'rubdash',
      name: 'rubdash',
      subname: 'RUB/DASH',
      from: 'rub',
      to: 'dash',
      calc: true,
      needs: [1, 'dashusd', 'usdrub']
    }, {
      pair: 'dashrub',
      name: 'dashrub',
      subname: 'DASH/RUB',
      from: 'dash',
      to: 'rub',
      calc: true,
      needs: ['dashusd', 'usdrub', 1],
      multiply: true
    }, {
      pair: 'rubxmr',
      name: 'rubxmr',
      subname: 'RUB/XMR',
      from: 'rub',
      to: 'xmr',
      calc: true,
      needs: [1, 'xmrusd', 'usdrub']
    }, {
      pair: 'xmrrub',
      name: 'xmrrub',
      subname: 'XMR/RUB',
      from: 'xmr',
      to: 'rub',
      calc: true,
      needs: ['xmrusd', 'usdrub', 1],
      multiply: true
    }, {
      pair: 'rubzec',
      name: 'rubzec',
      subname: 'RUB/ZEC',
      from: 'rub',
      to: 'zec',
      calc: true,
      needs: [1, 'zecusd', 'usdrub']
    }, {
      pair: 'zecrub',
      name: 'zecrub',
      subname: 'ZEC/RUB',
      from: 'zec',
      to: 'rub',
      calc: true,
      needs: ['zecusd', 'usdrub', 1],
      multiply: true
    }, {
      pair: 'xmrltc',
      name: 'xmrltc',
      subname: 'XMR/LTC',
      from: 'xmr',
      to: 'ltc',
      calc: true,
      needs: ['xmrusd', 'ltcusd']
    }, {
      pair: 'ltcxmr',
      name: 'ltcxmr',
      subname: 'LTC/XMR',
      from: 'ltc',
      to: 'xmr',
      calc: true,
      needs: ['ltcusd', 'xmrusd']
    }, {
      pair: 'xmrbtg',
      name: 'xmrbtg',
      subname: 'XMR/BTG',
      from: 'xmr',
      to: 'btg',
      calc: true,
      needs: ['xmrusd', 'btgusd']
    }, {
      pair: 'btgxmr',
      name: 'btgxmr',
      subname: 'BTG/XMR',
      from: 'btg',
      to: 'xmr',
      calc: true,
      needs: ['btgusd', 'xmrusd']
    }, {
      pair: 'xmrxrp',
      name: 'xmrxrp',
      subname: 'XMR/XRP',
      from: 'xmr',
      to: 'xrp',
      calc: true,
      needs: ['xmrusd', 'xrpusd']
    }, {
      pair: 'xrpxmr',
      name: 'xrpxmr',
      subname: 'XRP/XMR',
      from: 'xrp',
      to: 'xmr',
      calc: true,
      needs: ['xrpusd', 'xmrusd']
    }, {
      pair: 'xmrxlm',
      name: 'xmrxlm',
      subname: 'XMR/XLM',
      from: 'xmr',
      to: 'xlm',
      calc: true,
      needs: ['xmrusd', 'xlmusd']
    }, {
      pair: 'xlmxmr',
      name: 'xlmxmr',
      subname: 'XLM/XMR',
      from: 'xlm',
      to: 'xmr',
      calc: true,
      needs: ['xlmusd', 'xmrusd']
    }, {
      pair: 'xmrdash',
      name: 'xmrdash',
      subname: 'XMR/DASH',
      from: 'xmr',
      to: 'dash',
      calc: true,
      needs: ['xmrusd', 'dashusd']
    }, {
      pair: 'dashxmr',
      name: 'dashxmr',
      subname: 'DASH/XMR',
      from: 'dash',
      to: 'xmr',
      calc: true,
      needs: ['dashusd', 'xmrusd']
    }, {
      pair: 'xmrzec',
      name: 'xmrzec',
      subname: 'XMR/ZEC',
      from: 'xmr',
      to: 'zec',
      calc: true,
      needs: ['xmrusd', 'zecusd']
    }, {
      pair: 'zecxmr',
      name: 'zecxmr',
      subname: 'ZEC/XMR',
      from: 'zec',
      to: 'xmr',
      calc: true,
      needs: ['zecusd', 'xmrusd']
    }, {
      pair: 'zecltc',
      name: 'zecltc',
      subname: 'ZEC/LTC',
      from: 'zec',
      to: 'ltc',
      calc: true,
      needs: ['zecusd', 'ltcusd']
    }, {
      pair: 'ltczec',
      name: 'ltczec',
      subname: 'LTC/ZEC',
      from: 'ltc',
      to: 'zec',
      calc: true,
      needs: ['ltcusd', 'zecusd']
    }, {
      pair: 'zecbtg',
      name: 'zecbtg',
      subname: 'ZEC/BTG',
      from: 'zec',
      to: 'btg',
      calc: true,
      needs: ['zecusd', 'btgusd']
    }, {
      pair: 'btgzec',
      name: 'btgzec',
      subname: 'BTG/ZEC',
      from: 'btg',
      to: 'zec',
      calc: true,
      needs: ['btgusd', 'zecusd']
    }, {
      pair: 'zecxrp',
      name: 'zecxrp',
      subname: 'ZEC/XRP',
      from: 'zec',
      to: 'xrp',
      calc: true,
      needs: ['zecusd', 'xrpusd']
    }, {
      pair: 'xrpzec',
      name: 'xrpzec',
      subname: 'XRP/ZEC',
      from: 'xrp',
      to: 'zec',
      calc: true,
      needs: ['xrpusd', 'zecusd']
    }, {
      pair: 'zecxlm',
      name: 'zecxlm',
      subname: 'ZEC/XLM',
      from: 'zec',
      to: 'xlm',
      calc: true,
      needs: ['zecusd', 'xlmusd']
    }, {
      pair: 'xlmzec',
      name: 'xlmzec',
      subname: 'XLM/ZEC',
      from: 'xlm',
      to: 'zec',
      calc: true,
      needs: ['xlmusd', 'zecusd']
    }, {
      pair: 'zecdash',
      name: 'zecdash',
      subname: 'ZEC/DASH',
      from: 'zec',
      to: 'dash',
      calc: true,
      needs: ['zecusd', 'dashusd']
    }, {
      pair: 'dashzec',
      name: 'dashzec',
      subname: 'DASH/ZEC',
      from: 'dash',
      to: 'zec',
      calc: true,
      needs: ['dashusd', 'zecusd']
    }, {
      pair: 'dashltc',
      name: 'dashltc',
      subname: 'DASH/LTC',
      from: 'dash',
      to: 'ltc',
      calc: true,
      needs: ['dashusd', 'ltcusd']
    }, {
      pair: 'ltcdash',
      name: 'ltcdash',
      subname: 'LTC/DASH',
      from: 'ltc',
      to: 'dash',
      calc: true,
      needs: ['ltcusd', 'dashusd']
    }, {
      pair: 'dashbtg',
      name: 'dashbtg',
      subname: 'DASH/BTG',
      from: 'dash',
      to: 'btg',
      calc: true,
      needs: ['dashusd', 'btgusd']
    }, {
      pair: 'btgdash',
      name: 'btgdash',
      subname: 'BTG/DASH',
      from: 'btg',
      to: 'dash',
      calc: true,
      needs: ['btgusd', 'dashusd']
    }, {
      pair: 'dashxrp',
      name: 'dashxrp',
      subname: 'DASH/XRP',
      from: 'dash',
      to: 'xrp',
      calc: true,
      needs: ['dashusd', 'xrpusd']
    }, {
      pair: 'xrpdash',
      name: 'xrpdash',
      subname: 'XRP/DASH',
      from: 'xrp',
      to: 'dash',
      calc: true,
      needs: ['xrpusd', 'dashusd']
    }, {
      pair: 'dashxlm',
      name: 'dashxlm',
      subname: 'DASH/XLM',
      from: 'dash',
      to: 'xlm',
      calc: true,
      needs: ['dashusd', 'xlmusd']
    }, {
      pair: 'xlmdash',
      name: 'xlmdash',
      subname: 'XLM/DASH',
      from: 'xlm',
      to: 'dash',
      calc: true,
      needs: ['xlmusd', 'dashusd']
    }, {
      pair: 'xlmltc',
      name: 'xlmltc',
      subname: 'XLM/LTC',
      from: 'xlm',
      to: 'ltc',
      calc: true,
      needs: ['xlmusd', 'ltcusd']
    }, {
      pair: 'ltcxlm',
      name: 'ltcxlm',
      subname: 'LTC/XLM',
      from: 'ltc',
      to: 'xlm',
      calc: true,
      needs: ['ltcusd', 'xlmusd']
    }, {
      pair: 'xlmbtg',
      name: 'xlmbtg',
      subname: 'XLM/BTG',
      from: 'xlm',
      to: 'btg',
      calc: true,
      needs: ['xlmusd', 'btgusd']
    }, {
      pair: 'btgxlm',
      name: 'btgxlm',
      subname: 'BTG/XLM',
      from: 'btg',
      to: 'xlm',
      calc: true,
      needs: ['btgusd', 'xlmusd']
    }, {
      pair: 'xlmxrp',
      name: 'xlmxrp',
      subname: 'XLM/XRP',
      from: 'xlm',
      to: 'xrp',
      calc: true,
      needs: ['xlmusd', 'xrpusd']
    }, {
      pair: 'xrpxlm',
      name: 'xrpxlm',
      subname: 'XRP/XLM',
      from: 'xrp',
      to: 'xlm',
      calc: true,
      needs: ['xrpusd', 'xlmusd']
    }, {
      pair: 'xrpltc',
      name: 'xrpltc',
      subname: 'XRP/LTC',
      from: 'xrp',
      to: 'ltc',
      calc: true,
      needs: ['xrpusd', 'ltcusd']
    }, {
      pair: 'ltcxrp',
      name: 'ltcxrp',
      subname: 'LTC/XRP',
      from: 'ltc',
      to: 'xrp',
      calc: true,
      needs: ['ltcusd', 'xrpusd']
    }, {
      pair: 'xrpbtg',
      name: 'xrpbtg',
      subname: 'XRP/BTG',
      from: 'xrp',
      to: 'btg',
      calc: true,
      needs: ['xrpusd', 'btgusd']
    }, {
      pair: 'btgxrp',
      name: 'btgxrp',
      subname: 'BTG/XRP',
      from: 'btg',
      to: 'xrp',
      calc: true,
      needs: ['btgusd', 'xrpusd']
    }, {
      pair: 'btgltc',
      name: 'btgltc',
      subname: 'BTG/LTC',
      from: 'btg',
      to: 'ltc',
      calc: true,
      needs: ['btgusd', 'ltcusd']
    }, {
      pair: 'ltcbtg',
      name: 'ltcbtg',
      subname: 'LTC/BTG',
      from: 'ltc',
      to: 'btg',
      calc: true,
      needs: ['ltcusd', 'btgusd']
    } ],
    fiat: {
      included: [
        'rub',
        'usd',
        'eur',
        'aud',
        'cad',
        'gbp'
      ],
      excluded: []
    }
  }
};
