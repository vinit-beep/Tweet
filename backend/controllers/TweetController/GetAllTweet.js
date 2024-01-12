import { Tweet } from "../../model/TweetModel.js";
import { asyncErrorHandler } from "../../utills/AsyncErrorHandler.js";

export const allTweet = asyncErrorHandler(async (req, res) => {
  let query = {};

  if (req.params.userId) {
    query = { userId: req.params.userId };
  }

  const Tweets = await Tweet.find(query)
    .populate({
      path: "image",
    })
    .populate({
      path: "userId",
    })
    .sort({ time: -1 });
  res.status(201).json({
    status: true,
    data: Tweets,
  });
});
