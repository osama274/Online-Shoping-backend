import express from "express";
import * as articelsController from "../controllers/articelsController.js";
const menRouter = express.Router();

menRouter.get("/men", async (req, res) => {
  res.render("men", {
    menArticels: await articelsController.getMenArticels(),
  });
});
export default menRouter;
