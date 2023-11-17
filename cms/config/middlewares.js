const mediaSrc = [
  "'self'",
  'data:',
  'blob:',
  'dl.airtable.com',
  `${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`,
];

module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': mediaSrc,
          'media-src': mediaSrc,
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
