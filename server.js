import express from "express";
import mongoose from "mongoose";
import path from "path";
import MainRouter from "./routers/main.js";
import MenRouter from "./routers/men.js";
import WomenRouter from "./routers/women.js";
import ChildernRouter from "./routers/childern.js";
import DetailsRouter from "./routers/details.js";




const app = express();
const PORT = 3335;
const __dirname = path.resolve(path.dirname(""));
app.use(express());
app.set("view engine", "ejs");
app.set("views", "views"); // defualt 'views'
const staticDirectory = path.join(__dirname, "statics");
app.use(express.static(staticDirectory));
mongoose.connect("mongodb://localhost:27017/Onlin-Schoping");

app.use("/", MainRouter);
app.use("/", MenRouter);
app.use("/", WomenRouter);
app.use("/", ChildernRouter);
app.use("/",DetailsRouter)




app.listen(PORT, () => {
  console.log(`app listing on port http://localhost:${PORT}`);
});
