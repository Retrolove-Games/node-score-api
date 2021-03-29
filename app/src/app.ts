import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import DefaultRouter from "./DefaultRouter";

const app = express();

// Routes
app.use(DefaultRouter);
app.use(express.static("public"));
app.use(cors);
app.use(bodyParser.json);

app.listen(process.env.NODE_LOCAL_PORT, () => {
  console.log("Server running on port " + process.env.NODE_LOCAL_PORT);
});

/* app.get('/', (req, res, next) => {
  res.json({hello: "world!!!", current_env: process.env.NODE_ENV});
}); */


/*
import { Project } from "./db/models/Project";
import db, { status } from "./db/Sequelize"; */
/*
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
*/
