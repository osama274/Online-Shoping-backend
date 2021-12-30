import express from "express";
import * as articelsController from "../controllers/articelsController.js";
const womenRouter = express.Router();

womenRouter.get("/women", async (req, res) => {
  res.render("women", {
    womenArticels: await articelsController.getWomenArticels(),
  });
});
export default womenRouter;
