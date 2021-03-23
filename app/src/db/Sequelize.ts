import { Sequelize } from "sequelize-typescript";
import { Project } from "./models/Project";

const fs = require("fs");
const path = require("path");
let connectionStatus = false;

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

// Add models
sequelize.addModels([Project]);

(async () => {
  try {
    await sequelize.authenticate();
    connectionStatus = true;
  } catch (error) {
    console.error("Unable to connect to the database");
  }
})();

const db: dbInterface = {
  sequelize: sequelize,
  Sequelize: Sequelize
};

export const status = () => {
  return connectionStatus;
}

export default db;
