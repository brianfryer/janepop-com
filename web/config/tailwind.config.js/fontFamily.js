const defaultTheme = require('tailwindcss/defaultTheme');
const ff = require('../fontFamily.json');

const fontFamily = {
  ...ff,
  system: defaultTheme.fontFamily.sans,
};

module.exports = fontFamily;
