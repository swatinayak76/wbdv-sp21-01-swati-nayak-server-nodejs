const express = require("express");
const router = express.Router();

// Quizz Api's

const QuizServics = require("../controllers/quizzes-controller");

router.post("/createquizz", QuizServics.createQuiz);
router.get("/getallquizzes", QuizServics.findAllQuizzes);
router.get("/quizzes/:qzid", QuizServics.findQuizById);

// Question API
const QuestionService = require("../controllers/questions-controller");

router.post("/addquestions", QuestionService.addQuestion);
router.get("/questions", QuestionService.findAllQuestions);
router.get("/quizzes/:qid/questions", QuestionService.findQuestionsForQuiz);
router.get("/questions/:qid", QuestionService.findQuestionById);


// Quiz Attempt
const QuizAttempt = require("../controllers/quiz-attempts-controller");

router.post("/quizzes/:qid/attempts", QuizAttempt.createAttempt);
router.get("/quizzes/:qid/attempts", QuizAttempt.findAttemptsForQuiz);

module.exports = router;
