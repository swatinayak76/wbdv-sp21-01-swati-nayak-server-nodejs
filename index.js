const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

const connectDatabase = require("./DB/connection");
var cors = require("cors");
app.use(cors());
// require("./controllers/quizzes-controller")(app);
// require("./controllers/questions-controller")(app);
// require("./controllers/quiz-attempts-controller")(app);

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const _dirname = path.resolve();
app.use("uploads", express.static(path.join(_dirname, "uploads")));

// Question and Quiz API

const apiRoutes = require("./api/index");

app.get("/", (req, res) => {
  res.send("welcome");
});
app.use("/api", apiRoutes);

require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

connectDatabase();

//const PORT = 9090;
const PORT = process.env.PORT || 9090;

app.listen(PORT, function () {
  console.log("server is started");
});
