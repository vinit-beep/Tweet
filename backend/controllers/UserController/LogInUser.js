import { User } from "../../model/UserModel.js";
import { asyncErrorHandler } from "../../utills/AsyncErrorHandler.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { CustomError } from "../../utills/CustumError.js";
dotenv.config();
const secretkey = process.env.JWT_KEY;
// ✅
export const LogInUser = asyncErrorHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const check = await User.findOne({ email: email });
  console.log(check);

  if (check) {
    bcrypt.compare(password.toString(), check.password, (err, result) => {
      if (result) {
        jwt.sign({ check }, secretkey, { expiresIn: "12hr" }, (err, token) => {
          if (err) {
            console.log(err.message);
          } else {
            res.status(201).json({status:true, data: check, token: token });
          }
        });
      } else {
        console.log(err);
        return next(new CustomError("Log In Failed", 404));
      }
    });
  } else {
    return next(new CustomError("User Not Found", 404));
  }
});
