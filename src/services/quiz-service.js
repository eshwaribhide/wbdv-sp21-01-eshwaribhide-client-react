export const findAllQuizzes = (quizId) =>
    fetch("https://wbdv-eshwaribhide-server-node.herokuapp.com/api/quizzes")
                .then(response => response.json())

export const submitQuiz = (quizId, questions) =>
 fetch(`https://wbdv-eshwaribhide-server-node.herokuapp.com/api/quizzes/${quizId}/attempts`, {
   method: 'POST',
   body: JSON.stringify(questions),
   headers: {
     'content-type': 'application/json'
   }
 }).then(response => response.json())


export default {findAllQuizzes, submitQuiz}