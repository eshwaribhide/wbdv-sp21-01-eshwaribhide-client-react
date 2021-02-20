import React from 'react'
import {Link} from "react-router-dom";

// const CourseEditor = ({props}) =>
const CourseEditor = ({history}) =>
  <div>
    <h2>
        <Link to="/courses/table">
            <i className="fas fa-arrow-left"></i>
        </Link>
        Course Editor
        <i onClick={() => history.goBack()}
           className="fas fa-times float-right"></i>
        {/*<i onClick={() => props.history.goBack()}*/}
        {/*   className="fas fa-times float-right"></i>*/}
    </h2>

    <div class="alert alert-success alert-dismissible fade show" id="alert" role="alert">
        Module Deleted
        <button type="button" class="close" data-dismiss="alert">&times;</button>
    </div>
    <div class="container">
        <h1>Editor</h1>

        <div class="row">
            <div class="col-sm-4">

                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action active">
                        Module 1 - JQuery
                        <i class="pull-right fa fa-times"></i>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        Module 2 - React
                        <i class="pull-right fa fa-times"></i>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        Module 3 - Redux
                        <i class="pull-right fa fa-times"></i>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        Module 4 - Native
                        <i class="pull-right fa fa-times"></i>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        Module 5 - Angular
                        <i class="pull-right fa fa-times"></i>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        Module 6 - Node
                        <i class="pull-right fa fa-times"></i>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        Module 7 - Mongo
                        <i class="pull-right fa fa-times"></i>
                    </a>
                </div>

            </div>
            <div class="col-sm-8">
                <ul class="nav nav-tabs" id="main-tab" role="tablist">
                    <li class="nav-item pl-4">
                        <a class="nav-link active" id="lesson-1-tab" data-toggle="tab" href="#" role="tab">Lesson 1</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="lesson-2-tab" data-toggle="tab" href="#" role="tab">Lesson 2</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="lesson-3-tab" data-toggle="tab" href="#" role="tab">Lesson 3</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="lesson-4-tab" data-toggle="tab" href="#" role="tab">Lesson 4</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="lesson-5-tab" data-toggle="tab" href="#" role="tab">Lesson 5</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="lesson-6-tab" data-toggle="tab" href="#" role="tab">Lesson 6</a>
                    </li>
                </ul>

                <br/>

                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Topic 1</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " aria-current="page" href="#">Topic 2</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " aria-current="page" href="#">Topic 3</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " aria-current="page" href="#">Topic 4</a>
                    </li>
                </ul>
            </div>

        </div>

        <br>
        <div class="row">
            <div class="col-sm-4">
                <button class="btn btn-primary btn-block wbdv-login">New Module</button>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-sm-4">
                <button class="btn btn-primary btn-block wbdv-login">Delete Module</button>
            </div>
        </div>

    </div>

  </div>

export default CourseEditor
