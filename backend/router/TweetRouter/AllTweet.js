import express from "express";
import { allTweet } from "../../controllers/TweetController/GetAllTweet.js";
export const AllTweetRouter = express.Router();

AllTweetRouter.get("/alltweet", allTweet);