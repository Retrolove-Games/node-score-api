import { Router } from "express";
import path from "path";
import { addProject, addScore, getResults } from "./db/dbInterface";

const DefaultRouter = Router();

// Main page
DefaultRouter.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "/../public/index.html"));
});

DefaultRouter.post("/score/:name", (request, response) => {
  addScore(request.params.name, request.body.data)
    .then(() => {
      response.json({status: "OK"});
    })
    .catch(() => {
      response.status(400).json({status: "Error"});
    });
});

export default DefaultRouter;
