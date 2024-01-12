import express from "express";
import { CreateTweetRouter } from "./CreateTweet.js";
import { AllTweetRouter } from "./AllTweet.js";

export const TweetRouter = express.Router();

TweetRouter.use(CreateTweetRouter);
TweetRouter.use(AllTweetRouter);
