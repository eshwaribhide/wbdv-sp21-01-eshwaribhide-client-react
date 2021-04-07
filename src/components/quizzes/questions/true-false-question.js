import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
    const [answer, setAnswer] = useState(null)
    const [graded, setGraded] = useState(false)
    return (
                <>
                <h4>
                    {question.question}
                {
                    graded && JSON.stringify(answer) == question.correct &&
                    <i className="fas fa-check"></i>
                }
                {
                    graded && JSON.stringify(answer) != question.correct &&
                    <i className="fas fa-times"></i>
                }
                </h4>
                <div class="col-3">
                <ul className="list-group">
                    <li className="list-group-item">
                    <label><input
                                    type="radio"
                                    onClick={() => setAnswer(true)}
                                    name={question._id}/>True</label>
                     </li>
                     <li className="list-group-item">
                    <label><input
                        type="radio"
                        onClick={() => setAnswer(false)}
                        name={question._id}/>False</label>
                    </li>
                </ul>
                </div>
                <br/>
            <button onClick={() => setGraded(true)} style={{backgroundColor: "green", borderRadius: "5px"}}>
              Grade
            </button>
            <br/>
            <br/>
            </>


    )
}

export default TrueFalseQuestion;