import { User } from "../../model/UserModel.js";
import bcrypt from "bcrypt";
import { userValidationSchema } from "../../validations/UserValidation.js";
import { asyncErrorHandler } from "../../utills/AsyncErrorHandler.js";

// ✅
export const CreateUser = asyncErrorHandler(async (req, res) => {
  const { email, username, password, DOB } = req.body;
  await userValidationSchema.validateAsync(req.body);
  const hashpassword = await bcrypt.hash(password, 10);
  const user = new User({
    username: username,
    email: email,
    password: hashpassword,
    DOB: DOB,
  });

  const saveUser = await user.save();

  res.status(201).json({
    status: true,
    data: saveUser,
  });
});
