import { Router } from "express";
import path from "path";
import { addScore, getResults } from "./db/dbInterface";

const DefaultRouter = Router();

// Main page
DefaultRouter.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "/../public/index.html"));
});

// Post score
DefaultRouter.post("/score/:name", (request, response) => {
  addScore(request.params.name, request.body.data)
    .then(() => {
      response.json({status: "OK"});
    })
    .catch(() => {
      response.status(400).json({status: "Error"});
    });
});

// get scores
DefaultRouter.get("/score/:name/:count?", (request, response) => {

  getResults(request.params.name, +request.params.count || 10)
    .then(data => {
      response.json(data);
    })
    .catch(() => {
      response.status(400).json({status: "Error"});
    });
});

export default DefaultRouter;
