

let quizzes = require('./quizzes.json')
let questions = require('./questions.json')

const auth = {

  getALlQuizzes:  function (req, res) {
 
    const user = quizzes.filter(item=>{
      return item
    })

    res.json(user)
  },

  getQuizz:  function (req, res) {
 
console.log(req.params.id)

let quiz_id = quizzes.find((item)=>{
  if(item._id== req.params.id){
    return item
  }
})

console.log(quiz_id._id)



    const user = questions.filter(item=>{
     if(item.quizId=== quiz_id._id){

      return item
       
     }
    })

    res.json(user)
  },

    




  
 


};

module.exports = auth;
