const path = require('path');

module.exports = ({ env }) => {
  const connection = env('RAILWAY_ENVIRONMENT', 'none') == 'none'
    ? {
      client: 'sqlite',
      connection: { filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')) },
      useNullAsDefault: true,
    }
    : {
      client: 'postgres',
      connection: { connectionString: env('DATABASE_PRIVATE_URL') },
      pool: { min: 0 },
    };

  return { connection };
};
