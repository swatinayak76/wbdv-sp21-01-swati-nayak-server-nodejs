const QuizServices = require("../services/quizzes-service");
const QuestionsService = require("../services/questions-service");


class QuizeController {
  async createQuiz(req, res) {
    try {
      let body = req.body;
      let allQuizzes = await QuizServices.createQuiz(body); 

      return res.send(allQuizzes);
    } catch (err) {
      return res.status(err.status || 500).send(err.msg);
    }
  }
  async findAllQuizzes(req, res) {
    try {
      let allQuizzes = await QuizServices.findAllQuizzes();

      return res.send(allQuizzes);
    } catch (err) {
      return res.status(err.status || 500).send(err.msg);
    }
  }
  async findQuizById(req, res) {
    try {
      const quizId = req.params.qzid;
      const quiz = await QuizServices.findQuizById(quizId);
      const questions = await QuestionsService.findQuestionsForQuiz(quizId)
      let resp = {
        _id: quiz._id,
        questions: questions,
        title: quiz.title
      }
      return res.json(resp);
    } catch (err) {
      return res.status(err.status || 500).send(err.msg);
    }
  }
}

module.exports = new QuizeController();
