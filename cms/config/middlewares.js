const mediaSrc = ({ env }) => [
  "'self'",
  'data:',
  'blob:',
  'dl.airtable.com',
  env('R2_PUBLIC_URL').replace(/^https?:\/\//, ''),
];

module.exports = ({ env }) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': mediaSrc({ env }),
          'media-src': mediaSrc({ env }),
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
