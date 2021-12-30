import express from "express";
import * as articelsController from "../controllers/articelsController.js";
const detailsRouter = express.Router();

detailsRouter.get("/articel/:id", async (req, res) => {
 let id = req.params.id
  res.render("details", {
    articel: await articelsController.getDteails(id)
  });
});
export default detailsRouter;
