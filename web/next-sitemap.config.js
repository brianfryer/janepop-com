const baseUrl = require('./utils/baseUrl_cjs');

const additionalSitemapsPaths = [];

const additionalSitemaps = additionalSitemapsPaths.map(
  (path) => new URL(path, baseUrl).toString(),
);

const nextSitemapConfig = {
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
  ],
  exclude: [
    '/admin',
    ...additionalSitemapsPaths,
  ],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps,
    policies: [{
      userAgent: '*',
      allow: '/',
    }, {
      userAgent: '*',
      disallow: '/admin',
    }],
  },
  siteUrl: baseUrl.toString(),
};

module.exports = nextSitemapConfig;
