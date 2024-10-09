import { Dialect } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();

interface DbConfig {
  username: string | undefined;
  password: string | undefined;
  database: string | undefined;
  host: string | undefined;
  port: number | undefined | string;
  dialect: Dialect | undefined | string;
}

interface Config {
  development: DbConfig;
  test: DbConfig;
  production: DbConfig;
}

const config: Config = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: process.env.DB_DIALECT || "postgres",
  },
  test: {
    username: "root",
    password: "null",
    database: "database_test",
    host: "127.0.0.1",
    port: "",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: "null",
    database: "database_production",
    host: "127.0.0.1",
    port: "",
    dialect: "mysql",
  },
};

export default config;
