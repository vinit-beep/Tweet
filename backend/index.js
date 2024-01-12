import mongoose from "mongoose";
import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import dotenv from "dotenv";
import { AllRouter } from "./router/index.js";
import { GlobelErrorr } from "./controllers/ErrorHandler.js";
import { CustomError } from "./utills/CustumError.js";
dotenv.config();
const app = express();

const port = process.env.PORT;
const mongoose_url = process.env.MONGOOSE_URL;

mongoose
  .connect(mongoose_url)
  .then(() => {
    console.log("connection sucess");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(fileUpload());
app.use(cors());
app.use("/", AllRouter);
app.all("*", (req, res, next) => {
  const err = new CustomError(`cant find ${req.originalUrl} on server`, 404);
  next(err);
});
app.use(GlobelErrorr); 

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
