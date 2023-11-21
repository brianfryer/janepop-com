const eslint = require('./config/eslint');
const images = require('./config/images');
const redirects = require('./config/redirects');
const webpack = require('./config/webpack');

const nextConfig = {
  eslint,
  images,
  reactStrictMode: false,
  redirects,
  swcMinify: true,
  webpack,
};

module.exports = nextConfig;
