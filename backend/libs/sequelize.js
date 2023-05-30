import { Sequelize } from 'sequelize';
import config from '../config.js';
import setupModels from "../db/models/index.js";

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: (msg) => console.log(msg),
  timezone: '-05:00',
});

setupModels(sequelize);

export default sequelize;