const QuizAttemptDao = require("../daos/quiz-attempts-dao");

class QuizAttempts {
  async createAttempt(req, res) {
    try {
      let qid = req.params.qid;
      let body = req.body;
      let attempt = await QuizAttemptDao.createAttempt(qid, body);

      return res.json(attempt);
    } catch (err) {
      return res.status(err.status || 500).send(err.msg);
    }
  }
  async findAttemptsForQuiz(req, res) {
    try {
      const quizId = req.params.qid;
      const attempts = await QuizAttemptDao.findAttemptsForQuiz(quizId);

      return res.json(attempts);
    } catch (err) {
      return res.status(err.status || 500).send(err.msg);
    }
  }
}

module.exports = new QuizAttempts();

// const quizAttemptDao = require("../daos/quiz-attempts-dao");
// module.exports = (app) => {
//   app.post("/api/quizzes/:qid/attempts", (req, res) =>
//     quizAttemptDao
//       .createAttempt(req.params.qid, req.body)
//       .then((attempt) => res.send(attempt))
//   );
//   app.get("/api/quizzes/:qid/attempts", (req, res) =>
//     quizAttemptDao
//       .findAttemptsForQuiz(req.params.qid)
//       .then((attempts) => res.send(attempts))
//   );
// };
