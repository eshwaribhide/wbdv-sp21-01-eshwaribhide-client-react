import topicService from "../services/topic-service";

export const RESET = "RESET"
export const CREATE_TOPIC = "CREATE_TOPIC"
export const UPDATE_TOPIC = "UPDATE_TOPIC"
export const DELETE_TOPIC = "DELETE_TOPIC"
export const FIND_TOPICS = "FIND_TOPICS"




export const refresh = (dispatch) => {
    const RESET_ACTION = {
              type: RESET
            }
            dispatch(RESET_ACTION)
}

export const findTopicsForLesson = (dispatch, lessonId) => {
    console.log("LOAD TOPICS FOR LESSON:")
    console.log(lessonId)


    topicService.findTopicsForLesson(lessonId)
        .then(topics => dispatch({
            type: FIND_TOPICS,
            topics
        }))


}

export const createTopic = (dispatch, lessonId) => {
    topicService
        .createTopic(lessonId, {title: "New Topic"})
        .then(topic => dispatch({
            type: CREATE_TOPIC,
            topic
        }))
}

export const updateTopic = (dispatch, topic) =>
    topicService.updateTopic(topic._id, topic)
        .then(status => dispatch({
            type: UPDATE_TOPIC,
            topic
        }))

export const deleteTopic = (dispatch, topicToDelete) => {
    topicService.deleteTopic(topicToDelete._id)
        .then(status => dispatch({type: DELETE_TOPIC, topicToDelete: topicToDelete}))
}

const topicActions = {
    createTopic, findTopicsForLesson, updateTopic, deleteTopic, refresh
}

export default topicActions