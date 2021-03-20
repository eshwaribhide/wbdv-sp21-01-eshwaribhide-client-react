import lessonService from "../services/lesson-service";

export const RESET = "RESET"
export const CREATE_LESSON = "CREATE_LESSON"
export const UPDATE_LESSON = "UPDATE_LESSON"
export const DELETE_LESSON = "DELETE_LESSON"
export const FIND_LESSONS = "FIND_LESSONS"




export const refresh = (dispatch) => {
    const RESET_ACTION = {
              type: RESET
            }
            dispatch(RESET_ACTION)
}

export const findLessonsForModule = (dispatch, moduleId) => {
    console.log("LOAD LESSONS FOR MODULE:")
    console.log(moduleId)


    lessonService.findLessonsForModule(moduleId)
        .then(lessons => dispatch({
            type: FIND_LESSONS,
            lessons
        }))
}

export const createLesson = (dispatch, moduleId) => {
    console.log("CREATE LESSON FOR MODULE: " + moduleId)
    lessonService
        .createLesson(moduleId, {title: "New Lesson"})
        .then(lesson => dispatch({
            type: CREATE_LESSON,
            lesson
        }))
}

export const updateLesson = (dispatch, lesson) =>
            lessonService.updateLesson(lesson._id, lesson)
                .then(status => dispatch({
                    type: UPDATE_LESSON,
                    lesson
                }))

export const deleteLesson = (dispatch, lessonToDelete) => {
    lessonService.deleteLesson(lessonToDelete._id)
        .then(status => dispatch({type: DELETE_LESSON, lessonToDelete: lessonToDelete}))
}

const lessonActions = {
    createLesson, findLessonsForModule, updateLesson, deleteLesson, refresh
}

export default lessonActions