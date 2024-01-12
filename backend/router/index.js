import express from "express";
import { UserRouter } from "./UserRoute/index.js";

export const AllRouter = express.Router();
AllRouter.use("/user", UserRouter);
