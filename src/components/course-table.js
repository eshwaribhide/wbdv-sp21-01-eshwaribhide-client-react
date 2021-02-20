import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable
  extends React.Component {

  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return(
      <div>

        <table className="table">
        <tr>
                                <th>Title</th>
                                <th>Owned By</th>
                                <th>Last Modified</th>
                                <th><i className="fas fa-2x fa-folder"></i></th>
                                <th><i className="fas fa-2x fa-sort-alpha-down"></i></th>
                                <th><Link to="/courses/grid">
                                 <i className="fas fa-2x fa-th"></i>
                                 </Link></th>
                            </tr>
          <tbody>
          {
            this.props.courses.map((course, ndx) =>
              <CourseRow
                  updateCourse={this.props.updateCourse}
                deleteCourse={this.props.deleteCourse}
                key={ndx}
                course={course}
                title={course.title}
                owner={course.owner}
                lastModified={course.lastModified}
              />)
          }
          </tbody>
        </table>
      </div>
    )
  }
}
