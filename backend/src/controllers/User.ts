import { User } from "../models/User";
import { Request, Response, NextFunction } from "express";

//// User Registration    http://localhost:4000/api/user/register
const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, email, password, role } = req.body;
  if (role === "admin") {
    res.status(401).json({
      success: false,
      message: "You cann't register as 'admin'.",
    });
  } else {
    try {
      const data = {
        username: username,
        email: email,
        password: password,
        role: role,
      };
      const user = await User.create(data);
      //sendToken(user, 200, res);
      res.status(201).json({
        success: true,
        message: "User Registration successfull.",
      });
    } catch (err) {
      console.error(err);
      next(err);
      res.status(500).json({
        success: false,
        message: "User validation error",
      });
    }
  }
};
export { registerUser };
