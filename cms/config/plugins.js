module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  upload: {
    config: {
      breakpoints: {
        xxlarge: 1920,
        xlarge: 1600,
        large: 1000,
        medium: 750,
        small: 500,
        xsmall: 64,
      },
      provider: '@bg-dev/strapi-provider-upload-r2',
      providerOptions: {
        accessKeyId: env('R2_ACCESS_KEY_ID'),
        secretAccessKey: env('R2_SECRET_ACCESS_KEY'),
        bucket: env('R2_BUCKET'),
        accountId: env('R2_ACCOUNT_ID'),
        publicUrl: env('R2_PUBLIC_URL'),
      },
    },
  },
});
