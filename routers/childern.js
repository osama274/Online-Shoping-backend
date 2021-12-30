import express from "express";
import * as articelsController from "../controllers/articelsController.js";
const childernRouter = express.Router();

childernRouter.get("/childern", async (req, res) => {
  res.render("childern", {
    childernArticels: await articelsController.getChildernArticels(),
  });
});
export default childernRouter;
