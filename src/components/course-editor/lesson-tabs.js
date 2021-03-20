import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../../services/lesson-service'
import lessonActions from "../../actions/lesson-actions";

const LessonTabs = (
    {
        lessons=[
            {_id: "123", title: "Lesson A"},
            {_id: "123", title: "Lesson B"},
            {_id: "123", title: "Lesson C"}
        ],
        findLessonsForModule,
        createLesson,
        updateLesson,
        deleteLesson,
        refresh
    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        refresh()
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
    }, [moduleId])
    return(
    <div>
        <h2>Lessons</h2>
        <ul className="nav nav-pills">
            {
                lessons.map(lesson =>
                    <li className="nav-item">
                        <EditableItem
                            active={lesson._id === lessonId}
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                            deleteItem={deleteLesson}
                            updateItem={updateLesson}
                            item={lesson}/>
                    </li>
                )
            }
            <li>
                <i onClick={() => createLesson(moduleId)} className="fas fa-plus"></i>
            </li>
        </ul>
    </div>)}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => ({
    refresh: () => lessonActions.refresh(dispatch),
    findLessonsForModule: (moduleId) => lessonActions.findLessonsForModule(dispatch, moduleId),
    createLesson: (moduleId) => lessonActions.createLesson(dispatch, moduleId),
    updateLesson: (lesson) => lessonActions.updateLesson(dispatch, lesson),
    deleteLesson: (lessonToDelete) => lessonActions.deleteLesson(dispatch, lessonToDelete),
})

export default connect(stpm, dtpm)(LessonTabs)
