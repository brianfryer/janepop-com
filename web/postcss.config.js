const path = require('path');

module.exports = {
  plugins: [
    'postcss-import',
    ['tailwindcss', { config: path.join(__dirname, 'config/tailwind.config.js/index.js') }],
    'postcss-flexbugs-fixes',
    'autoprefixer',
    ['postcss-preset-env', { stage: 1 }],
  ],
};
