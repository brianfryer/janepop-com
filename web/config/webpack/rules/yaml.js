module.exports = {
  test: /\.ya?ml$/,
  type: 'json',
  use: {
    loader: 'yaml-loader',
    options: {
      asJSON: true,
    },
  },
};
