import  React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = (
    {
        deleteCourse,
        updateCourse,
        course,
        lastModified,
        title,
        owner
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <div className="card">
        <div className="card-body">
        {
            !editing &&

            <Link to="/courses/editor" className="card-title">
                {title}
            </Link>
        }
        {
            editing &&
            <input
                onChange={(event) => setNewTitle(event.target.value)}
                value={newTitle}
                className="form-control"
                />
        }
            <p className="card-text">Some description</p>

            {editing && <i onClick={() => saveTitle()} className="fas fa-check" style={{color:"green"}}></i>}
            {editing && <i onClick={() => { setEditing(false); deleteCourse(course)}} className="fas fa-times" style={{color:"red"}}></i>}
            {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit" style={{color:"blue"}}></i>}

            </div>
            </div>
    </div>
  )
}

export default CourseCard
