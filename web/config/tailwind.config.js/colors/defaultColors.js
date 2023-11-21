const tailwindColors = require('tailwindcss/colors');
const {
  isFunction,
  isString,
  get,
  has,
} = require('lodash');

const defaultColors = Object
  // remove deprecated colors
  .entries(Object.getOwnPropertyDescriptors(tailwindColors))
  .filter(([, desc]) => has(desc, 'value') && !isFunction(desc.value))
  // add `base` property
  .reduce((colors, [key, { value }]) => {
    if (isString(value)) return { ...colors, [key]: value };

    const base = get(value, '500');
    const values = { base, ...value };

    return { ...colors, [key]: values };
  }, {});

module.exports = defaultColors;
