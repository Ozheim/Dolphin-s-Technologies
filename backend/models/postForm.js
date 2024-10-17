import mongoose from "mongoose";

const ApplyToJobSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  Email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: Number,
    required: true,
    trim: true,
  },
  linkedin: {
    type: String,
    required: true,
    trim: true,
  },
});

const PostForm = mongoose.model("PostForm", ApplyToJobSchema);
export default PostForm;
