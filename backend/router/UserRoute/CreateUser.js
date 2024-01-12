import { CreateUser } from "../../controllers/UserController/CreateUser.js";
import express from "express";
export const CreateUserRouter = express.Router();

CreateUserRouter.post("/createuser", CreateUser);
