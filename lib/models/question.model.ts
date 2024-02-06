import mongoose from "mongoose";

const Question = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  answers: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Question",
    },
  ],
  vote: {
    upvote: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    downvote: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  parentId: {
    type: mongoose.Schema.ObjectId,
    ref: "Question",
  },
});
