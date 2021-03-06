import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Question from "./questions/question";
import questionsService from "../../services/questions-service";
import quizService from "../../services/quiz-service";

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    const [attempts, setAttempts] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    useEffect(() => {
       questionsService.findAllQuestions(quizId)
            .then(questions => setQuestions(questions))
        },[])

    return(
        <div>
            <h2>Quiz {quizId} (see attempts at bottom)</h2>
            <ul>
                {
                    questions.map(question =>

                    <li>
                        <Question question={question} submitted={submitted}
                        isAnswerCorrect={(JSON.stringify(question.answer) === JSON.stringify(question.correct))}/>
                    </li>
                    )

                }
            </ul>
            <div class="col-sm-3">
            <button class='btn btn-success btn-block'
                onClick={() =>
                {quizService.submitQuiz(quizId, questions).then(result => {setAttempts([...attempts, result.score])});
                 setSubmitted(true);
                }}
                style={{backgroundColor: "green", borderRadius: "5px"}}>
                Submit
            </button>
            </div>
            <br/>
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
