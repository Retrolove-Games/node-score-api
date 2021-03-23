import { Project } from "./db/models/Project";
import { status } from "./db/Sequelize";
var express = require('express');
var app = express();

app.listen(3000, () => {
  console.log('Server running on port 3000');
  console.log("Initial connection status:", status());
});

app.get('/', (req, res, next) => {
  res.json({hello: "world!!!", current_env: process.env.NODE_ENV});
});

app.get('/db', (req, res, next) => {
  const project = new Project({ name: "test" });
  project
    .save()
    .then(() => {
      res.json({db: process.env.MYSQL_DATABASE, status: status()});
    })
    .catch((err) => {
      res.status(500).json({ error: "DB connection problem" });
    });
});
