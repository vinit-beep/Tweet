import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    // required:true
  },

  email: {
    type: String,
    // required:true
  },

  password: {
    type: String,
    // required:true
  },

  gender: {
    type: String,
    // required:true
  },

  DOB: {
    type: Date,
    // required:true
  },

  bio: {
    type: String,
  },

  profile_img: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkiIFjCOZ-mMeqxd2ryrneiHedE8G9S0AboA&usqp=CAU",
  },

  profile_back: {
    type: String,
    default:
      "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
  },

  isPublic: {
    type: Boolean,
    default: true,
  },

  time: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model("User", userSchema);
