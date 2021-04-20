const questionsModel = require("../models/questions/questions-model");
const quizzesModel = require("../models/quizzes/quizzes-model");

const findAllQuestions = () => questionsModel.find();
const findQuestionById = (qid) => questionsModel.findById(qid);
const findQuestionsForQuiz = (qzid) =>
  // quizzesModel.findById(qzid).populate("questions");
  questionsModel.find({"quizId": qzid})
  

const addQuestion = (body) => {
  let { _id, title, question, quizId, correct, type, choices } = body;
  questionsModel.create({
    _id: _id,
    title,
    question,
    quizId,
    correct,
    type,
    choices: body.choices,
  });
};
module.exports = {
  findAllQuestions,
  findQuestionById,
  findQuestionsForQuiz,
  addQuestion,
};
