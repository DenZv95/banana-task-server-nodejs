import User from "../../models/userModel.js";
import asyncHandler from "express-async-handler";
import { generateToken } from "../../helpers/generateToken.js";

// @desc    Register user
// @route   POST /api/users/register
// @access  Public
export const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email: email });

  if (findUser) {
    res.status(400);
    throw new Error("Пользователь уже зарегистрирован");
  }

  const user = await User.create({
    email,
    password,
  });

  const token = generateToken(user._id);

  res.json({ user, token });
});
