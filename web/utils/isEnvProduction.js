const env = process.env.NODE_ENV || 'development';
const isEnvProduction = env === 'production';

module.exports = isEnvProduction;
