import Joi from "joi";

export const userValidationSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).trim().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  gender: Joi.string().required(),
  DOB: Joi.date().required(),
  bio: Joi.string(),
  profile_img: Joi.string().uri(),
  profile_back: Joi.string().uri(),
  isPublic: Joi.boolean().default(true),
  time: Joi.date().default(Date.now),
});
