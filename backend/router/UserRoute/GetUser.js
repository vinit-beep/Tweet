import express from "express";
import { GetUser } from "../../controllers/UserController/GetUser.js";
export const GetUserRouter = express.Router();

GetUserRouter.post("/getuser", GetUser);
