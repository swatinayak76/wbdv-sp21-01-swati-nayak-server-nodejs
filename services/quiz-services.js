let quizzes = require("./quizzes.json");
let questions = require("./questions.json");
let question_schema = require("../models/questions/questions-schema");


const quizz = {
  findAllQuizzes: () => {
    const user = quizzes.filter((item) => {
      return item;
    });
    return user;
  },

  findQuizById: (id) => {
    let quiz_id = quizzes.find((item) => {
      if (item._id == id) {
        return item;
      }
    });
    const user = questions.filter((item) => {
      if (item.quizId === quiz_id._id) {
        return item;
      }
    });
    question_schema.save(user);
    return user;
  },
};

module.exports = quizz;
