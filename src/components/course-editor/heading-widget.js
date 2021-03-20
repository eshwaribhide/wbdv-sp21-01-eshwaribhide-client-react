import React, {useState} from 'react'

const HeadingWidget = (
{widget, updateWidget, deleteWidget}
) => {
 const [editing, setEditing] = useState(false)
 const [cachedItem, setCachedItem] = useState(widget)
 return (
    <div>


        {!editing &&
        <>
        { cachedItem.size ===1 && <h1>{cachedItem.text}</h1>}
                { cachedItem.size ===2 && <h2>{cachedItem.text}</h2>}
                { cachedItem.size ===3 && <h3>{cachedItem.text}</h3>}
                { cachedItem.size ===4 && <h4>{cachedItem.text}</h4>}
                { cachedItem.size ===5 && <h5>{cachedItem.text}</h5>}
                { cachedItem.size ===6 && <h6>{cachedItem.text}</h6>}
         <i onClick={() => setEditing(true)} className="fas fa-cog float-right"></i>
        </>}



        {
            editing &&
            <div>
            <select onChange={(e) => setCachedItem({...cachedItem, type: e.target.value})} value={cachedItem.type} className="form-control">
                                                <option value={"HEADING"}>Heading</option>
                                                <option value={"PARAGRAPH"}>Paragraph</option>

             </select>
                <input onChange={(e) => setCachedItem({...cachedItem, text: e.target.value})} value={cachedItem.text} className="form-control"/>
                <select onChange={(e) => setCachedItem({...cachedItem, size: parseInt(e.target.value)})} value={cachedItem.size} className="form-control">
                    <option value={1}>Heading 1</option>
                    <option value={2}>Heading 2</option>
                    <option value={3}>Heading 3</option>
                    <option value={4}>Heading 4</option>
                    <option value={5}>Heading 5</option>
                    <option value={6}>Heading 6</option>
                </select>

            <i onClick={() => {setEditing(false); updateWidget(cachedItem)}} className="fas fa-check float-right"></i>
            <i onClick={() => {setEditing(false); deleteWidget(widget)}} className="fas fa-times float-right"></i>
            </div>
        }
    </div>
    )
    }

export default HeadingWidget