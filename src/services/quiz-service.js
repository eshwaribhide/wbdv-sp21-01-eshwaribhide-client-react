export const findAllQuizzes = (quizId) =>
    fetch("http://localhost:3000/api/quizzes")
                .then(response => response.json())

export default {findAllQuizzes}