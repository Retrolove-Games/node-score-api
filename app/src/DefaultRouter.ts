import { Router } from "express";
import path from "path";


const DefaultRouter = Router();

// Main page
DefaultRouter.get("/", (request, response) => {
  response.sendFile(path.join(__dirname + '/../public/index.html'));
});

export default DefaultRouter;
