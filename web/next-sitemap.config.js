const baseUrl = require('./utils/baseUrl_cjs');

const additionalSitemapsPaths = [];

const additionalSitemaps = additionalSitemapsPaths.map(
  (path) => new URL(path, baseUrl).toString(),
);

const nextSitemapConfig = {
  exclude: [
    ...additionalSitemapsPaths,
  ],
  generateRobotsTxt: true,
  robotsTxtOptions: { additionalSitemaps },
  siteUrl: baseUrl.toString(),
};

module.exports = nextSitemapConfig;
