import React, {useState, useEffect} from 'react'

const ImageWidget = ({widget, updateWidget, deleteWidget}) => {
const [editing, setEditing] = useState(false)
const [cachedItem, setCachedItem] = useState(widget)

 return (
        <div>
            {
                editing &&
                    <>
                        URL

                        <input onChange={(e) => setCachedItem({...cachedItem, url: e.target.value})}
                                                                           value={cachedItem.url}
                                                                           className="form-control"/>
                        width
                        <input onChange={(e) => setCachedItem({...cachedItem, width: e.target.value})}
                                                                              value={cachedItem.width}
                                                                              className="form-control"/>
                        height
                        <input onChange={(e) => setCachedItem({...cachedItem, height: e.target.value})}
                                                                              value={cachedItem.height}
                                                                              className="form-control"/>
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

            {
                            !editing &&
                            <>
                                <img src={cachedItem.url} width={cachedItem.width} height={cachedItem.height}></img>
                                <i onClick={() => setEditing(true)} className="fas fa-cog float-right"></i>
                            </>
                        }
        </div>
    )
}

export default ImageWidget