import express from "express";
import DefaultRouter from "./DefaultRouter";
import cors from "cors";

const app = express();

// Routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());
app.use(DefaultRouter);

app.listen(process.env.NODE_LOCAL_PORT, () => {
  console.log("Server running on port " + process.env.NODE_LOCAL_PORT);
});
