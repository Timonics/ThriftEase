import { Sequelize } from "sequelize";

const env = process.env.NODE_ENV || "development"
const config = require('./config');

const sequelize = new Sequelize(config[env])

export default sequelize