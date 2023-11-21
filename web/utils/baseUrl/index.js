import isEnvProduction from '~/utils/isEnvProduction';
import getDevelopmentBase from './getDevelopmentBase';
import getProductionBase from './getProductionBase';

const base = isEnvProduction
  ? getProductionBase() || getDevelopmentBase(process.env.PORT || 3000)
  : getDevelopmentBase(process.env.PORT || 3000);

const baseUrl = new URL(base);

export default baseUrl;
