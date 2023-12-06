const images = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: process.env.R2_PUBLIC_URL,
      port: '',
      pathname: '/**',
    },
  ],
};

module.exports = images;
