import express from "express";
import { LogInUser } from "../../controllers/UserController/LogInUser.js";
export const LogInUserRouter = express.Router();

LogInUserRouter.post("/login", LogInUser);