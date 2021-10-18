import express from "express";
import { registerUser } from "../controllers/User";
const userRouter = express.Router();

userRouter.route("/user/register").post(registerUser);

export { userRouter };
