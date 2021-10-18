import express from "express";
import { loginUser, registerUser } from "../controllers/User";
const userRouter = express.Router();

userRouter.route("/user/register").post(registerUser);
userRouter.route("/user/login").post(loginUser);

export { userRouter };
