import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
    const [answer, setAnswer] = useState(null)
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null)
    return (
                <>
                    <h4>
                        {question.question}
                        {
                            isAnswerCorrect!= null && isAnswerCorrect &&
                            <i className="fas fa-check" style={{color:"green"}}></i>
                        }
                        {
                             isAnswerCorrect!= null && !isAnswerCorrect &&
                            <i className="fas fa-times" style={{color:"red"}}></i>
                        }
                    </h4>
                    <div class="col-3">
                        <ul className="list-group">
                            {isAnswerCorrect == null &&
                            <>
                                <li className="list-group-item">
                                    <label>
                                        <input
                                            type="radio"
                                            onClick={() => setAnswer(true)}
                                            name={question._id}/>True
                                     </label>
                                </li>
                                <li className="list-group-item">
                                    <label>
                                        <input
                                              type="radio"
                                              onClick={() => setAnswer(false)}
                                              name={question._id}/>False</label>
                                </li>
                            </>
                            }

                            {isAnswerCorrect != null && isAnswerCorrect && answer &&
                            <>
                                <li className="list-group-item list-group-item-success">
                                    <label>
                                        <input
                                            type="radio"
                                            checked
                                            onClick={() => setAnswer(true)}
                                            name={question._id}/>True
                                            <i className="fas fa-check" style={{color:"green"}}></i>
                                    </label>
                                </li>
                                <li className="list-group-item">
                                    <label>
                                        <input
                                          type="radio"
                                          onClick={() => setAnswer(false)}
                                          name={question._id}/>False
                                    </label>
                                </li>
                            </>
                            }

                            {isAnswerCorrect != null && isAnswerCorrect && !answer &&
                            <>
                                <li className="list-group-item">
                                    <label>
                                        <input
                                            type="radio"
                                            onClick={() => setAnswer(true)}
                                            name={question._id}/>True
                                    </label>
                                </li>
                                <li className="list-group-item list-group-item-success">
                                    <label>
                                        <input
                                            type="radio"
                                            checked
                                            onClick={() => setAnswer(false)}
                                            name={question._id}/>False
                                            <i className="fas fa-check" style={{color:"green"}}></i>
                                    </label>
                                 </li>
                             </>
                            }

                            {isAnswerCorrect != null && !isAnswerCorrect && answer &&
                             <>
                                 <li className="list-group-item list-group-item-success">
                                     <label>
                                        <input
                                             type="radio"
                                             checked
                                             onClick={() => setAnswer(true)}
                                             name={question._id}/>True
                                             <i className="fas fa-check" style={{color:"green"}}></i>
                                     </label>
                                 </li>
                                 <li className="list-group-item list-group-item-danger">
                                    <label>
                                        <input
                                               type="radio"
                                               onClick={() => setAnswer(false)}
                                               name={question._id}/>False
                                               <i className="fas fa-times" style={{color:"red"}}></i>
                                    </label>
                                 </li>
                             </>
                             }

                             {isAnswerCorrect != null && !isAnswerCorrect && !answer &&
                             <>
                                 <li className="list-group-item list-group-item-danger">
                                    <label>
                                        <input
                                             type="radio"
                                             onClick={() => setAnswer(true)}
                                             name={question._id}/>True
                                             <i className="fas fa-times" style={{color:"red"}}></i>
                                    </label>
                                 </li>
                                 <li className="list-group-item list-group-item-success">
                                    <label>
                                        <input
                                             type="radio"
                                             checked
                                             onClick={() => setAnswer(false)}
                                             name={question._id}/>False
                                             <i className="fas fa-check" style={{color:"green"}}></i>
                                    </label>
                                 </li>
                             </>
                             }

                        </ul>
                    </div>
                    <br/>
                    <button onClick={() => setIsAnswerCorrect(JSON.stringify(answer) == question.correct)} style={{backgroundColor: "green", borderRadius: "5px"}}>
                        Grade
                    </button>
                    <br/>
                    <br/>
            </>


    )
}

export default TrueFalseQuestion;

