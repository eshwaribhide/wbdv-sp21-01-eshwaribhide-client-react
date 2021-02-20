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
  <div className="col-4">
      <div className="card">
      <div className="card-body">
      {
                      !editing &&
                      <Link to="/courses/editor">
                          {title}
                      </Link>
                  }
                  {
                      editing &&
                      <input
                          onChange={(event) => setNewTitle(event.target.value)}
                          value={newTitle}
                          className="card-title"/>
                  }

          <h5 className="card-title">{course.title}</h5>

          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>

            {editing && <i onClick={() => saveTitle()} className="fas fa-check" style={{color:"green"}}></i>}
            {editing && <i onClick={() => deleteCourse(course)} className="fas fa-times" style={{color:"red"}}></i>}
            {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit" style={{color:"blue"}}></i>}


          <i className="fas fa-trash"></i>
        </div>
      </div>
    </div>


  )
}
export default CourseCard

