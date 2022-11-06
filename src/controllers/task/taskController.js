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
