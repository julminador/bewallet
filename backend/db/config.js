import config from '../config.js';

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `${config.dbDialect}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

export default {
  development: {
    url: URI,
    dialect: config.dbDialect,
    timezone: '-05:00',
    define: {
      timestamps: false
    },
  },
  production: {
    url: URI,
    dialect: config.dbDialect,
    timezone: '-05:00',
    define: {
      timestamps: false
    },
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      }
    }
  }
}