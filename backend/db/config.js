import config from '../config.js';

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

export default {
  development: {
    url: URI,
    dialect: 'mysql',
    timezone: '-05:00',
    define: {
      timestamps: false
    },
  },
  production: {
    url: URI,
    dialect: 'mysql',
    timezone: '-05:00',
    define: {
      timestamps: false
    }
  }
}