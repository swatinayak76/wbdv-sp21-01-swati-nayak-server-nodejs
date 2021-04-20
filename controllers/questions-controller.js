const QuestionsService = require("../services/questions-service");

//Class
class QuestionController {
  async addQuestion(req, res) {
    try {
      let body = req.body;
      let allQuizzes = await QuestionsService.addQuestion(body); 

      return res.send("Success");
    } catch (err) {
      return res.status(err.status || 500).send(err.msg);
    }
  }
  async findAllQuestions(req, res) {
    try {
      let allQuestions = await QuestionsService.findAllQuestions();

      return res.json(allQuestions);
    } catch (err) {
      return res.status(err.status || 500).send(err.msg);
    }
  }
  async findQuestionsForQuiz(req, res) {
    try {
      const quizId = req.params.qid;
      const questions = await QuestionsService.findQuestionsForquestions(
        quizId
      );

      return res.json(questions);
    } catch (err) {
      return res.status(err.status || 500).send(err.msg);
    }
  }
  async findQuestionById(req, res) {
    try {
      const questionID = req.params.qid;
      const question = await QuestionsService.findQuestionById(questionID);

      return res.json(question);
    } catch (err) {
      return res.status(err.status || 500).send(err.msg);
    }
  }
}

module.exports = new QuestionController();
