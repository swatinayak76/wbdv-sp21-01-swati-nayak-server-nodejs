const quizzesDao = require("../daos/quizzes-dao");
const findAllQuizzes = () => quizzesDao.findAllQuizzes();
const findQuizById = (qid) => quizzesDao.findQuizById(qid);
const createQuiz = (body) => quizzesDao.createQuiz(body);
let QuizServices = {
  findAllQuizzes,
  findQuizById,
  createQuiz,
};

module.exports = QuizServices;
