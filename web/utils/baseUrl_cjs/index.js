const isEnvProduction = require('../isEnvProduction');
const getDevelopmentBase = require('./getDevelopmentBase');
const getProductionBase = require('./getProductionBase');

const base = isEnvProduction
  ? getProductionBase() || getDevelopmentBase(process.env.PORT || 3000)
  : getDevelopmentBase(process.env.PORT || 3000);

const baseUrl = new URL(base);

module.exports = baseUrl;
