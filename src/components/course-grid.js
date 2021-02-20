import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({updateCourse, deleteCourse, courses}) =>
  <div>
      <Link to="/courses/table">
        <i className="fas fa-list fa-2x float-right"></i>
      </Link>
    <div className="row">
    {

      courses.map((course, ndx) =>
                               <CourseCard
                                   updateCourse={updateCourse}
                                 deleteCourse={deleteCourse}
                                 key={ndx}
                                 course={course}
                                 title={course.title}
                                 owner={course.owner}
                                 lastModified={course.lastModified}
                               />)
    }
    </div>
  </div>

export default CourseGrid
