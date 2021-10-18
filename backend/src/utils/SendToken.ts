import express, { Request, Response } from "express";
/// Create and Send jwt to http only cookie.

const sendToken = (user: any, statusCode: number, res: Response) => {
  /// create jwt
  const token = user.getJwtToken();
  /// Options for cookie
  const options = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

export { sendToken };
