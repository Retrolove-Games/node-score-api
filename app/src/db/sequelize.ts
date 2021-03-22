import { Sequelize } from "sequelize";
const fs = require("fs");
const path = require("path");

interface dbInterface {
  sequelize: Sequelize
  Sequelize: object
}

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_ROOT_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.MYSQL_HOST || "localhost",
    port: +process.env.MYSQL_LOCAL_PORT,
    logging: false
  }
);

const db: dbInterface = {
  sequelize: sequelize,
  Sequelize: Sequelize
};

export default db;
