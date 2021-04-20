const mongoose = require("mongoose");
const quizzesSchema = mongoose.Schema(
  {
    _id: String,
    title: String,
    questions: [
      {
        type: String,
        ref: "questions",
      },
    ],
  },
  { collection: "quizzes" }
);
module.exports = quizzesSchema;
