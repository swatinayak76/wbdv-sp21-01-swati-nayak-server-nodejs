const express = require('express')
// require("dotenv").config();
// const connectDatabase = require("./DB/connection");
const app = express()
const path = require("path");


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const _dirname = path.resolve()
app.use("uploads", express.static(path.join(_dirname, 'uploads')));


// auth signUp login ForgetPassword
let auth = require('./services/quizServices')

app.get('/getallquizzes' , auth.getALlQuizzes )
app.get('/get_quiz/:id' , auth.getQuizz )


// connectDatabase();
const PORT = process.env.PORT || 6000

app.listen(PORT , function(){
    console.log('server is started')
})
