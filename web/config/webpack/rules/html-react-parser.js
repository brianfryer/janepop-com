const path = require('path');

module.exports = {
  test: /html-react-parser\/lib\/index\.js$/,
  resolve: {
    alias: {
      'html-dom-parser': path.join(path.dirname(require.resolve('html-dom-parser')), 'server/html-to-dom.js'),
    },
  },
};
