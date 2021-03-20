import lessonService from "../services/lesson-service";

refresh: (dispatch) => {
    const RESET_ACTION = {
              type: "RESET"
            }
            dispatch(RESET_ACTION)
}

findLessonsForModule: (dispatch, moduleId) => {
    console.log("LOAD LESSONS FOR MODULE:")
    console.log(moduleId)


    lessonService.findLessonsForModule(moduleId)
        .then(lessons => dispatch({
            type: "FIND_LESSONS",
            lessons
        }))
}

createLesson: (dispatch, moduleId) => {
    console.log("CREATE LESSON FOR MODULE: " + moduleId)
    lessonService
        .createLesson(moduleId, {title: "New Lesson"})
        .then(lesson => dispatch({
            type: "CREATE_LESSON",
            lesson
        }))
}

updateLesson: (dispatch, lesson) =>
            lessonService.updateLesson(lesson._id, lesson)
                .then(status => dispatch({
                    type: "UPDATE_LESSON",
                    lesson
                }))

deleteLesson: (dispatch, lessonToDelete) => {
    lessonService.deleteLesson(lessonToDelete._id)
        .then(status => dispatch({type: "DELETE_LESSON", lessonToDelete: lessonToDelete}))
}

const lessonActions = {
    createlesson, findLessonsForModule, updateLesson, deleteLesson
}

export default lessonActions