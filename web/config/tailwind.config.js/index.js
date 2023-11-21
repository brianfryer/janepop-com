const defaultTheme = require('tailwindcss/defaultTheme');

const dirs = require('../dirs.json');
const extensions = require('../extensions.json');

const colors = require('./colors');
const fontFamily = require('./fontFamily');
const plugins = require('./plugins');
const screens = require('./screens');
const typography = require('./typography');

module.exports = {
  content: [`./{${dirs.join(',')}}/**/*.{${extensions.join(',')}}`],
  theme: {
    colors,
    backgroundColor: (theme) => ({ ...theme('colors') }),
    container: false,
    screens,
    extend: {
      fontFamily,
      spacing: (theme, { negative }) => ({ ...negative(defaultTheme.spacing) }),
      typography,
    },
  },
  plugins,
};
