const { Tokens } = require('../../../.mirrorful/theme_cjs');
const defaultColors = require('./defaultColors');
const formatColors = require('./formatColors');
const radixColors = require('./radixColors');

const colors = formatColors({
  ...defaultColors,
  ...radixColors,
  ...Tokens.colors,
});

module.exports = colors;
