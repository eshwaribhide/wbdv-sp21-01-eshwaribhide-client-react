import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Question from "./questions/question";
import questionsService from "../../services/questions-service";
import quizService from "../../services/quiz-service";

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [questions, setQuestions] = useState([]);
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
            <button onClick={() => quizService.submitQuiz(quizId, questions)} style={{backgroundColor: "green", borderRadius: "5px"}}>
                Submit
            </button>
        </div>
    );
}

export default Quiz;
