import topicService from "../services/topic-service";

refresh: (dispatch) => {
    const RESET_ACTION = {
              type: "RESET"
            }
            dispatch(RESET_ACTION)
}

findTopicsForLesson: (dispatch, lessonId) => {
    console.log("LOAD TOPICS FOR LESSON:")
    console.log(lessonId)


    topicService.findTopicsForLesson(lessonId)
        .then(topics => dispatch({
            type: "FIND_TOPICS",
            topics
        }))


}

createTopic: (dispatch, lessonId) => {
    topicService
        .createTopic(lessonId, {title: "New Topic"})
        .then(topic => dispatch({
            type: "CREATE_TOPIC",
            topic
        }))
}

updateTopic: (dispatch, topic) =>
    topicService.updateTopic(topic._id, topic)
        .then(status => dispatch({
            type: "UPDATE_TOPIC",
            topic
        }))

deleteTopic: (dispatch, topicToDelete) => {
    topicService.deleteTopic(topicToDelete._id)
        .then(status => dispatch({type: "DELETE_TOPIC", topicToDelete: topicToDelete}))
}

const topicActions = {
    createTopic, findTopicsForLesson, updateTopic, deleteTopic
}

export default topicActions