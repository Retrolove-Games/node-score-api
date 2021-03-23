import { Project } from "./db/models/Project";
import db from "./db/sequelize";
var express = require('express');
var app = express();

(async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

app.get('/', (req, res, next) => {
  res.json({hello: "world!!!", current_env: process.env.NODE_ENV});
});

app.get('/db', (req, res, next) => {
  res.json({db: process.env.MYSQL_DATABASE});
  // const project = new Project({ name: "test" })
  // project.save();
});
