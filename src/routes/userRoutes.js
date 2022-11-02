import express from "express";
import { getUserProfile } from "../controllers/user/userController.js";
import { registerUser } from "../controllers/user/regController.js";

const router = express.Router();

router.route("/profile").get(getUserProfile);
router.route("/register").post(registerUser);

export default router;
