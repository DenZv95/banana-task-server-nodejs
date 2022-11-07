import express from "express";
import { createTask, getTasks } from "../controllers/task/taskController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/create").post(protect, createTask);
router.route("/list").get(protect, getTasks);

export default router;
