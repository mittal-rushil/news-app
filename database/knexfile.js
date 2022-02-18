require('dotenv').config();
const configuration = {
  client: process.env.DB_CLIENT || 'mssql',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'sa',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '',
    charset: process.env.DB_CHARSET || 'utf8',
    options: {
      port: 1433,
      database: process.env.DB_NAME || '',
      encrypt: process.env.Enable_DB_SSL ? true : false,
    },
    requestTimeout: 120*1000,
  },
  debug: process.env.DB_DEBUG ? true : false,
};

module.exports = {
  development: Object.assign({}, configuration, {
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations',
      tableName: 'app_migration',
    }
  })
};
