import asyncHandler from "express-async-handler";

import Task from "../../models/taskModel.js";

// @desc    Create new task
// @route   POST /api/tasks/create
// @access  Private
export const createTask = asyncHandler(async (req, res) => {
  const { name, complete } = req.body;
  const task = await Task.create({ user: req.user._id, name, complete });
  res.json(task);
});

// @desc    Get list of tasks
// @route   GET /api/tasks/list
// @access  Private
export const getTasks = asyncHandler(async (req, res) => {
  const task = await Task.find({ user: req.user._id });
  res.json(task);
});

// @desc    Delete task
// @route   DELETE /api/tasks/delete
// @access  Private
export const deleteTask = asyncHandler(async (req, res) => {
  const { taskId } = req.body;

  const task = await Task.findById(taskId);

  if (!task) {
    res.status(404);
    throw new Error("Задача не найдена!");
  }

  await task.remove();

  res.json({ message: "Задача успешно удалена" });
});
