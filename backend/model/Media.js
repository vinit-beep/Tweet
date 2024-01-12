import mongoose from "mongoose";
import { Schema } from "mongoose";

const MediaSchema = new Schema({
  user_tweet_post: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
  },
});

export const Media = mongoose.model("Media", MediaSchema);
