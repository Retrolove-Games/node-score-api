import { Router } from "express";
import path from "path";

const DefaultRouter = Router();

// Main page
DefaultRouter.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "/../public/index.html"));
});

DefaultRouter.post("/score/:id", (request, response) => {
  console.log(request.body);
  console.log(request.params.id);
  response.send(request.body);
});

export default DefaultRouter;
