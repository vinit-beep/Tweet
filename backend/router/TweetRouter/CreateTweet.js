import express from "express";
import { CreateTweet } from "../../controllers/TweetController/CreateTweet.js";
export const CreateTweetRouter = express.Router();

CreateTweetRouter.post("/createtweet", CreateTweet);