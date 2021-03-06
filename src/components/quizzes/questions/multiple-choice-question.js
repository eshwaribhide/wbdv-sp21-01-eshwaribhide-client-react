import React, {useState}  from "react";

const MultipleChoiceQuestion = ({question, submitted, isAnswerCorrect}) => {
    const [answer, setAnswer] = useState(null)
    //const [isAnswerCorrect, setIsAnswerCorrect] = useState(null)
    return(
        <>
            <h4>{question.question}
                {
                   submitted && isAnswerCorrect &&
                   <i className="fas fa-check" style={{color:"green"}}></i>
               }
               {
                    submitted && !isAnswerCorrect &&
                   <i className="fas fa-times" style={{color:"red"}}></i>
               }
           </h4>
           <div class="col-3">
               <ul className="list-group">
                {!submitted &&
                    question.choices.map((choice) => {
                        return(
                        <>
                            <li className="list-group-item">
                                <label>
                                    <input type="radio"
                                    onClick={() => {setAnswer(choice); question.answer=choice;}}
                                    name={question._id}/>
                                    {choice}
                                    <br/>

                                </label>
                            </li>
                        </>
                        )
                    })
                }

                {submitted && isAnswerCorrect &&
                question.choices.map((choice) => {
                    if (choice === question.correct) {
                        if (choice == answer) {
                        return <>
                                   <li className="list-group-item list-group-item-success">
                                       <label>
                                           <input type="radio"
                                           onClick={() => {setAnswer(choice); question.answer=choice;}}
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
                                           onClick={() => {setAnswer(choice); question.answer=choice;}}
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
                                           onClick={() => {setAnswer(choice); question.answer=choice;}}
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
                                   onClick={() => {setAnswer(choice); question.answer=choice;}}

                                   name={question._id}/>
                                   {choice}
                                   <br/>
                               </label>
                           </li>
                       </>
                        }
                    }
                })}

                {submitted && !isAnswerCorrect &&

                question.choices.map((choice) => {

                    if (choice === question.correct) {
                        if (choice == answer) {
                        return <>
                                   <li className="list-group-item list-group-item-success">
                                       <label>
                                           <input type="radio"
                                           onClick={() => {setAnswer(choice); question.answer=choice;}}
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
                                                                   onClick={() => {setAnswer(choice); question.answer=choice;}}
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
                                                                   onClick={() => {setAnswer(choice); question.answer=choice;}}
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
                                   <li className="list-group-item">
                                       <label>
                                           <input type="radio"
                                           onClick={() => {setAnswer(choice); question.answer=choice;}}
                                           name={question._id}/>
                                           {choice}
                                           <br/>
                                       </label>
                                   </li>
                               </>
                    }
                    }
                })}

                </ul>
           </div>
        </>
    )
}

export default MultipleChoiceQuestion;