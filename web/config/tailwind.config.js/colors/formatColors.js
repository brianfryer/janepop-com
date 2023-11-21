const { isString, reduce } = require('lodash');

const formatColors = (colorsToFormat) => reduce(colorsToFormat, (colors, value, name) => {
  if (isString(value)) return { ...colors, [name]: value.toLowerCase() };

  const formattedValues = Object
    .keys(value)
    .map((key) => ({ [key]: value[key].toLowerCase() }))
    .reduce((values, formattedValue) => ({ ...values, ...formattedValue }), {});

  return { ...colors, [name]: formattedValues };
}, {});

module.exports = formatColors;
