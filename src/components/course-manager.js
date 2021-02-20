import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";

class CourseManager extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      courses: []
    };
//    this.addCourse = this.addCourse.bind(this)
//    this.updateInputValue = this.updateInputValue.bind(this)
  }


  updateCourse = (course) => {
    console.log(course)
    courseService.updateCourse(course._id, course)
        .then(status => this.setState((prevState) => ({
          ...prevState,
          courses: prevState.courses.map(
              (c) => c._id === course._id ? course : c)

          // courses: prevState.courses.map(c => {
          //   if(c._id === course._id) {
          //     return course
          //   } else {
          //     return c
          //   }
          // })
        })))
  }

  componentDidMount = () =>
    // findAllCourses()
    //     .then(actualCourses => this.setState({
    //       courses: actualCourses
    //     }))
    {
    findAllCourses()
        .then(courses => this.setState({courses}));
    }

  addCourse = () => {
     console.log('iv', this.state.inputValue)
    const newCourse = {
      title: this.state.inputValue,
      owner: "me",
      lastModified: "1/1/2021"
    }
    courseService.createCourse(newCourse)
        .then(course => this.setState(
            (prevState) => ({
              ...prevState,
              courses: [
                  ...prevState.courses,
                  course
              ]
            })))
    this.setState({ inputValue: '' });
  }

  deleteCourse = (courseToDelete) => {
    courseService.deleteCourse(courseToDelete._id)
        .then(status => {

          this.setState((prevState) => ({
              ...prevState,
              courses: prevState.courses.filter
                (course => course !== courseToDelete)
          }))
        })
  }


  updateInputValue(evt) {
       this.setState({ inputValue: evt.target.value });
    };

  render() {
    return(
      <div>
          <Link to="/">
            <i className="fas fa-2x fa-home float-right"></i>
          </Link>
          <br/>

        <div class="wbdv-sticky-top wbdv-padding-5px">
            <div class="row">
                <div class="col-sm-1">
                    <i class="fa fa-bars fa-2x"></i>
                </div>
                <div class="col-sm-2">
                    <h3>Course Manager</h3>
                </div>
                <div class="col-sm-5">

                  <input class="form-control" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>

                </div>
                <div class="col-sm-4">
                <span class="fa-stack fa-2x">
                  <i class="fa fa-circle fa-stack-2x" style={{color: "Red"}} onClick={this.addCourse}></i>
                                      <i class="fa fa-plus fa-stack-1x fa-inverse" onClick={this.addCourse}></i>
                </span>

                </div>
            </div>

        </div>

        <span class="fa-stack fa-2x" style={{position: "absolute", bottom: "30px", right:"50px"}}>
                          <i class="fa fa-circle fa-stack-2x" style={{color: "Red"}} onClick={this.addCourse}></i>
                                              <i class="fa fa-plus fa-stack-1x fa-inverse" onClick={this.addCourse}></i>
                        </span>


        <Route path="/courses/table">
          <CourseTable
              updateCourse={this.updateCourse}
              deleteCourse={this.deleteCourse}
              courses={this.state.courses}/>
        </Route>
        <Route path="/courses/grid">
          <CourseGrid
              deleteCourse={this.deleteCourse}
              courses={this.state.courses}/>
        </Route>
          <Route path="/courses/editor"
                 render={(props) => <CourseEditor {...props}/>}>
          </Route>
      </div>
    )
  }
}

export default CourseManager
