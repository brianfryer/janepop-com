const isEnvProduction = require('../../utils/isEnvProduction');
const pluginLastCall = require('./plugins/lastCall');
const ruleHtmlReactParser = require('./rules/html-react-parser');
const ruleSvg = require('./rules/svg');
const ruleYaml = require('./rules/yaml');

const rules = [ruleYaml, ruleSvg, ruleHtmlReactParser];
const plugins = [...(isEnvProduction ? [pluginLastCall] : [])];

module.exports = (config) => {
  // config.infrastructureLogging = { debug: /PackFileCache/ };

  rules.forEach((rule) => config.module.rules.push(rule));
  plugins.forEach((plugin) => config.plugins.push(plugin));

  return config;
};
