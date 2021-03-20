import React, {useState, useEffect} from 'react'

const ParagraphWidget = ({widget, updateWidget, deleteWidget}) => {
const [editing, setEditing] = useState(false)
 const [cachedItem, setCachedItem] = useState(widget)
    return (
        <div>
            {
                editing &&
                <>
                <select onChange={(e) => setCachedItem({...cachedItem, type: e.target.value})} value={cachedItem.type} className="form-control">
                                                    <option value={"HEADING"}>Heading</option>
                                                    <option value={"PARAGRAPH"}>Paragraph</option>

                                                </select>
                <textarea
                    onChange={(e) => setCachedItem({...cachedItem, text: e.target.value})}
                    value={cachedItem.text}
                    className="form-control"></textarea>

                <i onClick={() => {setEditing(false); updateWidget(cachedItem)}} className="fas fa-check float-right"></i>
                            <i onClick={() => {setEditing(false); deleteWidget(widget)}} className="fas fa-times float-right"></i>
                </>
            }
            {
                !editing &&
                <>
                    <p>
                        {cachedItem.text}
                    </p>
                    <i onClick={() => setEditing(true)} className="fas fa-cog float-right"></i>
                </>
            }
        </div>
    )
}

export default ParagraphWidget



