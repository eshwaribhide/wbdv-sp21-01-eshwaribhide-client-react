import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({updateCourse, deleteCourse, courses}) =>
  <div>
<div className="row">
<h4 className="d-none d-md-block col-5">Recent Documents</h4>
<h4 className="d-none d-md-block col-4">Owned By me <i className="col-1 fas fa-caret-down fa"></i></h4>
<div className="d-block d-md-none col-8"></div>
<i className="col-1 fas fa-2x fa-folder float-right"></i>
 <i className="col-1 fas fa-2x fa-sort-alpha-down"></i>
      <Link to="/courses/table">
        <i className="col-1 fas fa-list fa-2x"></i>
      </Link>


       </div>
      <br/>
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
