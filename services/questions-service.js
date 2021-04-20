const questionsDao = require("../daos/questions-dao");
const findAllQuestions = () => questionsDao.findAllQuestions();
const findQuestionById = (qid) => questionsDao.findQuestionById(qid);
const findQuestionsForQuiz = (qid) => questionsDao.findQuestionsForQuiz(qid);
const addQuestion = (body) => questionsDao.addQuestion(body);
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz,addQuestion };
