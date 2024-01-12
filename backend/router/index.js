import express from "express";
import { UserRouter } from "./UserRoute/index.js";
import { TweetRouter } from "./TweetRouter/index.js";

export const AllRouter = express.Router();

AllRouter.use("/user", UserRouter);
AllRouter.use("/tweet", TweetRouter);
