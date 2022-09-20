const devMode = process.env.NODE_ENV;

const DEV_MODE_TYPE = 'development';
const PROD_MODE_TYPE = 'production';

const isProd = devMode === PROD_MODE_TYPE;
const isDev = !isProd;

module.exports = {
  isProd,
  isDev,
  DEV_MODE_TYPE,
  PROD_MODE_TYPE
};
