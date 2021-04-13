import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import quizService from "../../services/quiz-service";

const Quizzes = () => {
    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        quizService.findAllQuizzes().then((quizzes) => {
                setQuizzes(quizzes)
            })
    }, [])
    return(
        <div>
            <h2>Quizzes</h2>
            <div className="list-group">
                {
                    quizzes.map((quiz) => {
                        return(

                            <div className="list-group-item col-5" >
                            <Link
                                to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                {quiz.title}
                            </Link>
                            <Link
                                to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                <button style={{backgroundColor: "blue", borderRadius: "5px", height: "25px", width: "50px", float: "right"}}>
                                    Start
                                </button>
                            </Link>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Quizzes;