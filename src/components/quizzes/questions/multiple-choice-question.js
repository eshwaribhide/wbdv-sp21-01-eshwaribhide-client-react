import React, {useState}  from "react";

const MultipleChoiceQuestion = ({question}) => {
    const [answer, setAnswer] = useState(null)
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null)
    return(
        <>
            <h4>{question.question}
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
                    question.choices.map((choice) => {
                        return(
                        <>
                            <li className="list-group-item">
                                <label>
                                    <input type="radio"
                                    onClick={() => setAnswer(choice)}
                                    name={question._id}/>
                                    {choice}
                                    <br/>

                                </label>
                            </li>
                        </>
                        )
                    })
                }

                {isAnswerCorrect != null && isAnswerCorrect &&
                question.choices.map((choice) => {
                    if (choice === question.correct) {
                        if (choice == answer) {
                        return <>
                                   <li className="list-group-item list-group-item-success">
                                       <label>
                                           <input type="radio"
                                           onClick={() => setAnswer(choice)}
                                           checked
                                           name={question._id}/>
                                           {choice}
                                           <i className="fas fa-check" style={{color:"green"}}></i>
                                           <br/>
                                       </label>
                                   </li>
                               </>
                        }
                        else {
                        return <>
                                   <li className="list-group-item list-group-item-success">
                                       <label>
                                           <input type="radio"
                                           onClick={() => setAnswer(choice)}
                                           name={question._id}/>
                                           {choice}
                                           <i className="fas fa-check" style={{color:"green"}}></i>
                                           <br/>
                                       </label>
                                   </li>
                               </>
                        }
                    } else {
                        if (choice == answer) {
                        return <>
                                   <li className="list-group-item">
                                       <label>
                                           <input type="radio"
                                           onClick={() => setAnswer(choice)}
                                           checked
                                           name={question._id}/>
                                           {choice}
                                           <br/>
                                       </label>
                                   </li>
                               </>
                        }
                        else {
                        return <>
                           <li className="list-group-item">
                               <label>
                                   <input type="radio"
                                   onClick={() => setAnswer(choice)}

                                   name={question._id}/>
                                   {choice}
                                   <br/>
                               </label>
                           </li>
                       </>
                        }
                    }
                })}

                {isAnswerCorrect != null && !isAnswerCorrect &&

                question.choices.map((choice) => {

                    if (choice === question.correct) {
                        if (choice == answer) {
                        return <>
                                   <li className="list-group-item list-group-item-success">
                                       <label>
                                           <input type="radio"
                                           onClick={() => setAnswer(choice)}
                                           checked
                                           name={question._id}/>
                                           {choice}
                                           <i className="fas fa-check" style={{color:"green"}}></i>
                                           <br/>
                                       </label>
                                   </li>
                               </>
                        }
                        else {
                        return <>
                                                           <li className="list-group-item list-group-item-success">
                                                               <label>
                                                                   <input type="radio"
                                                                   onClick={() => setAnswer(choice)}
                                                                   name={question._id}/>
                                                                   {choice}
                                                                   <i className="fas fa-check" style={{color:"green"}}></i>
                                                                   <br/>
                                                               </label>
                                                           </li>
                                                       </>
                        }
                    } else {
                        if (choice == answer) {
                        return <>
                                                           <li className="list-group-item list-group-item-danger">
                                                               <label>
                                                                   <input type="radio"
                                                                   onClick={() => setAnswer(choice)}
                                                                   checked
                                                                   name={question._id}/>
                                                                   {choice}
                                                                   <i className="fas fa-times" style={{color:"red"}}></i>
                                                                   <br/>
                                                               </label>
                                                           </li>
                                                       </>
                        }
                        else {
                        return <>
                                   <li className="list-group-item list-group-item-danger">
                                       <label>
                                           <input type="radio"
                                           onClick={() => setAnswer(choice)}
                                           name={question._id}/>
                                           {choice}
                                           <i className="fas fa-times" style={{color:"red"}}></i>
                                           <br/>
                                       </label>
                                   </li>
                               </>
                    }
                    }
                })}

                </ul>
           </div>
           <br/>
            <button onClick={() => setIsAnswerCorrect(answer == question.correct)} style={{backgroundColor: "green", borderRadius: "5px"}}>
              Grade
            </button>
            <br/>
            <br/>
        </>
    )
}

export default MultipleChoiceQuestion;