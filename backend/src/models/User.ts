import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please enter your username"],
  },
  email: {
    type: String,
    required: [true, "please enter your email"],
    unique: true,
    validate: [validator.isEmail, "Please enter valid email"],
  },
  password: {
    type: String,
    required: [true, "please enter your passwword"],
    minlength: [6, "password should be minimum six charactors"],
    select: false,
  },
  avatar: {
    type: String,
    default:
      "https://p.kindpng.com/picc/s/78-785827_user-profile-avatar-login-account-male-user-icon.png",
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  phone: {
    type: String,
    default: "NA",
  },
  address: {
    type: String,
    default: "NA",
  },

  state: {
    type: Number,
    enum: [0, 1],
    default: 1,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});
/// password encription

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

/// compare user password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//// generate password reset token
userSchema.methods.getResetPasswordToken = function () {
  // generate token
  const resetToken = crypto.randomBytes(20).toString("hex");
  // has and set to resetPasswordToken
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  // set token expires time
  this.resetPasswordExpire = Date.now() + 30 * 60 * 1000;

  return resetToken;
};
/// Return jwt
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET as any, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};
const User = mongoose.model("User", userSchema);
export { User };
