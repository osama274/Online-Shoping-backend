import express from "express";
import * as articelsController from "../controllers/articelsController.js";
const aricelsRouter = express.Router();


aricelsRouter.get("/", async (req, res) => {
  res.render("main", {
    articels: await articelsController.getAllArticels(),
  });
});
export default aricelsRouter;
