import { User } from "../../model/UserModel.js";
import { asyncErrorHandler } from "../../utills/AsyncErrorHandler.js";

export const GetUser = asyncErrorHandler(async (req, res) => {
  const userdata = await User.find({ _id: req.params.id });
  res.status(201).json({ status: true, data: userdata });
});
