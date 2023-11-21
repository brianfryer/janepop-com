const images = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: `${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`,
      port: '',
      pathname: '/**',
    },
  ],
};

module.exports = images;
