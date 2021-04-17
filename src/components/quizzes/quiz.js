import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Question from "./questions/question";
import questionsService from "../../services/questions-service";
import quizService from "../../services/quiz-service";

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    const [attempts, setAttempts] = useState([]);
    useEffect(() => {
       questionsService.findAllQuestions(quizId)
            .then(questions => setQuestions(questions))
        },[])

    return(
        <div>
            <h2>Quiz {quizId}</h2>
            <ul>
                {
                    questions.map(question =>
                    <li>
                        <Question question={question}/>
                    </li>
                    )
                }
            </ul>
            <button onClick={() => quizService.submitQuiz(quizId, questions).then(result => {setAttempts([...attempts, result.score])})} style={{backgroundColor: "green", borderRadius: "5px"}}>
                Submit
            </button>
        <h1>Attempts</h1>
        <ul>
        {
                            attempts.map(attempt =>
                            <li>
                                Score: {attempt}
                            </li>
                            )
                        }
                    </ul>
        </div>

    );
}

export default Quiz;
