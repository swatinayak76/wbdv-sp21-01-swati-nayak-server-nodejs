const quizzesModel = require("../models/quizzes/quizzes-model");
const findAllQuizzes = () => quizzesModel.find();
const findQuizById = (quizId) => quizzesModel.findById(quizId);
const createQuiz = ({_id,title,questions}) =>
  quizzesModel.create({
    _id: _id,
    title,
    questions,
  });

module.exports = { findAllQuizzes, findQuizById, createQuiz };
