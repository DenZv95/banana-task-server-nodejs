import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const taskSchema = new mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    name: String,
    complete: { type: Boolean, default: false },
  },
  { minimize: false, timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
