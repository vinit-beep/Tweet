import { asyncErrorHandler } from "../../utills/AsyncErrorHandler.js";
import { Tweet } from "../../model/TweetModel.js";
import { Media } from "../../model/Media.js";

export const CreateTweet = asyncErrorHandler(async (req, res) => {
  const image = new Media({ user_tweet_post: req.body.user_tweet_post });
  await image.save();
  const tweetMessage = new Tweet({
    message: req.body.message,
    image: image._id,
    userId: req.body._id,
  });
  await tweetMessage.save();
  res.status(201).json({
    status: true,
    data: tweetMessage,
  });
});
