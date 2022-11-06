import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    name: String,
    complete: { type: Boolean, default: false },
  },
  { minimize: false, timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
