import express from "express";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../controllers/task/taskController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/create").post(protect, createTask);
router.route("/list").get(protect, getTasks);
router.route("/update").put(protect, updateTask);
router.route("/delete").delete(protect, deleteTask);

export default router;
