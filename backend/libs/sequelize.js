import { Sequelize } from 'sequelize';
import config from '../config.js';
import setupModels from "../db/models/index.js";

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `${config.dbDialect}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const options = {
  dialect: config.dbDialect,
  logging: config.isProd ? false : (msg) => console.log(msg),
  timezone: '-05:00',
}

if (config.isProd) options.ssl = { rejectUnauthorized: false };

const sequelize = new Sequelize(URI, options);

setupModels(sequelize);

export default sequelize;