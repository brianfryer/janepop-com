const LastCallWebpackPlugin = require('last-call-webpack-plugin');
const postcss = require('postcss');
const postcssCombineDuplicatedSelectors = require('postcss-combine-duplicated-selectors');
const postcssCombineMediaQuery = require('postcss-combine-media-query');

const plugins = [
  postcssCombineDuplicatedSelectors({
    removeDuplicatedProperties: true,
  }),
  postcssCombineMediaQuery(),
];

const lastCall = new LastCallWebpackPlugin({
  assetProcessors: [{
    canPrint: true,
    regExp: /\.css$/,
    processor: (name, asset) => (
      postcss(plugins)
        .process(asset.source())
        .then(({ css }) => css)
    ),
  }],
});

module.exports = lastCall;
