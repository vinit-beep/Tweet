import express from "express";
import { CreateUserRouter } from "./CreateUser.js";
import { LogInUserRouter } from "./LogInUser.js";
import { GetUserRouter } from "./GetUser.js";

export const UserRouter = express.Router();
UserRouter.use(CreateUserRouter);
UserRouter.use(LogInUserRouter);
UserRouter.use(GetUserRouter);
