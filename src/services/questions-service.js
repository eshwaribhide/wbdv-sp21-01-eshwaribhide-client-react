export const findAllQuestions = (quizId) =>
    fetch(`https://wbdv-eshwaribhide-server-node.herokuapp.com/api/quizzes/${quizId}/questions`)
                        .then(response => response.json())

export default {findAllQuestions}