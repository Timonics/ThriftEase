import { Sequelize } from "sequelize";

const env = process.env.NODE_ENV || "development";
const config = require("./config");

const sequelize = new Sequelize(config[env]);

const init = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync({ alter: true });
    console.log("Database tables created successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

init();

export default sequelize;
