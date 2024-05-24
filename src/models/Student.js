import mongoose, { Schema } from "mongoose";

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  mark: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Student", StudentSchema);
