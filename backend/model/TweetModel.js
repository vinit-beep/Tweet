import mongoose from "mongoose";
import { Schema } from "mongoose";

const tweetSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  username: {
    type: String,
    // required:true
  },
  message: {
    type: String,
    // required:true
  },
  image: {
    type: Schema.Types.ObjectId,
    ref: "Media",
  },
  time: {
    type: Date,
    default: Date.now,
    // required:true
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const Tweet = mongoose.model("Tweet", tweetSchema);
