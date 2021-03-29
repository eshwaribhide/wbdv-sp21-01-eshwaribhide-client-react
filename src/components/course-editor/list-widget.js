import React, {useState, useEffect} from 'react'

const ListWidget = ({widget, updateWidget, deleteWidget}) => {
const [editing, setEditing] = useState(false)
 const [cachedItem, setCachedItem] = useState(widget)
 const [ischecked, setChecked] = useState(cachedItem.ordered)

 const handleChange = (e) => {
    setCachedItem({...cachedItem, ordered: e.target.checked})

    setChecked(e.target.checked)}

  return (
         <div>
             {
                 !editing &&
                     <>
                         {
                             widget.ordered &&
                             <ol>
                                 {
                                     widget.text.split("\n").map(item => {
                                         return(
                                             <li>{item}</li>
                                         )
                                     })
                                 }
                             </ol>

                         }
                         {
                             !widget.ordered &&
                             <ul>
                                 {
                                     widget.text.split("\n").map(item => {
                                         return(
                                             <li>{item}</li>
                                         )
                                     })
                                 }
                             </ul>

                         }
                     <i onClick={() => setEditing(true)} className="fas fa-cog float-right"></i>
                     </>
             }
             {
                 editing &&
                 <>

                     <input checked={ischecked} type="checkbox"
                     onChange={(e) => handleChange(e)} />

                     Ordered

                     <br/>
                     List Items
                     <textarea
                     rows={10}
                     onChange={(e) => setCachedItem({...cachedItem, text: e.target.value})}
                     value={cachedItem.text}
                     placeholder="Enter one list item per line"
                     className="form-control"></textarea>


                     <select onChange={(e) => setCachedItem({...cachedItem, type: e.target.value})} value={cachedItem.type} className="form-control">
                                                                              <option value={"HEADING"}>Heading</option>
                                                                              <option value={"PARAGRAPH"}>Paragraph</option>
                                                                              <option value={"LIST"}>List</option>
                                                                              <option value={"IMAGE"}>Image</option>

                     </select>
                     <i onClick={() => {setEditing(false); updateWidget(cachedItem)}} className="fas fa-check float-right"></i>
                                          <i onClick={() => {setEditing(false); deleteWidget(widget)}} className="fas fa-times float-right"></i>

                 </>
             }
             {/*<textarea></textarea>*/}
         </div>
     )
 }

 export default ListWidget