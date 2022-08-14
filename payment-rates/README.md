
# Сore

Implements cryptocurrencies rates fetching and API for getting it.
Contains two modules:
1. Webservice - implements API (`app.js`)
2. Background worker for rates fetching (`cron.js`)

## Fetchers list:
1. Bitfinex (https://www.bitfinex.com)
2. Bitstamp (https://www.bitstamp.net/)
3. Bittrex (https://international.bittrex.com/)
4. Coinmarketcap (https://coinmarketcap.com/)
5. Poloniex (https://poloniex.com/)



## Dependencies
Software:

1.  NodeJS (LTS branch), yarn / npm (package management)

2.  [External] MongoDB database (currently bind `MongoDB-Alpine` container)

3.  NPM packages dependencies (see `package.json`)

## Config

### Common options:

See .env.default file (contains main env refs)

 `db` section: 

`uri` - MongoDB URI 

`testUri` - MongoDB URI (used in mocha tests) _

`logger` secton 

Contains logger (winston) transport list and config. Includes min logger level for every transport, needed creditionals, etc.

`service` - webservice config

`port` internal port (may be rebined by Docker) 

`version` - api version used as a part baseUrl = `{sericeIp}:{port}/{apiVer}`

`tokens` section - contains config used at callback notifications about incoming / outgoing txs result (service send request contains txs data from payment service)

## Fetching pairs list
Contains this params:

`enabled` - bool flag used to enable/disable source
`pairs` - object of `fetched` and `calc` rates lists defining.

Fetched pair contains `pair` field used at stocks API request param
`name` - our intenal pair name
`from` - base currency name
`to` - result currency name

Calculated pair contains additional `needs` array contains base currency \ value (first) and resulted currency value. 

Calc algo: get base and resulted currency rates and then сalculate the result of dividing the base currency by the resulted.

Service return result value firstly from high-priority source, then from low-priority sources if higher priority sources are not available.

## API Specs

See `swagger.yml` file (OpenAPI 3.0)

## DB Models

See Mongoose models at `db/models` dir.

## Build

`docker build <dockerfile_name> -t <image_name>`

## Run

Without depencies: `docker run [-d] <image_name>`

With depencies (as MongoDB): `docker-compose up --build`

## Test

-   By external NodeJS (needs to install dev-dependencies): `npm run test`
-   In Docker:

1.  `docker build Dockefile.test -t <image_name>`
    
2.  `docker run <test_image_name>`
