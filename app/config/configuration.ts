require('dotenv').config();
export default {
  port: process.env.SERVER_PORT || '8080',
  logLevel: process.env.LOG_LEVEL || 'info',
  ip: undefined,
  database: {
    client: process.env.DB_CLIENT || 'mssql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      charset: process.env.DB_CHARSET,
      options: {
        port: 1433,
        database: process.env.DB_NAME,
        encrypt: process.env.Enable_DB_SSL ? true : false,
      },
    },
    debug: process.env.DB_DEBUG ? true : false,
  },
  url: {
    example: process.env.EXAMPLE_SERVICE_URL || '',
  },
};
