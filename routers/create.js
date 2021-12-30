import express from "express";
import * as articelsController from "../controllers/articelsController.js";
const createRouter = express.Router();

createRouter.post("/createArticels", async (req, res) => {
  res.json({
    articels: await articelsController.createArticels(),
  });
});
export default createRouter;
