const svgrOptions = {
  memo: true,
  ref: true,
};

module.exports = {
  test: /\.svg$/,
  oneOf: [
    {
      resourceQuery: /url/, // *.svg?url
      test: /\.svg$/i,
      type: 'asset/source',
    },
    {
      resourceQuery: /crispEdges/,
      use: [{
        loader: '@svgr/webpack',
        options: {
          ...svgrOptions,
          svgProps: {
            shapeRendering: 'crispEdges',
          },
        },
      }],
    },
    {
      loader: '@svgr/webpack',
      options: {
        ...svgrOptions,
      },
    },
  ],
};
