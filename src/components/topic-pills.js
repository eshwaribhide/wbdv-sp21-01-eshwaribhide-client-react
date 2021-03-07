import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../services/lesson-service'

const TopicPills = (
    {
        topics=[
            {_id: "123", title: "Topic A"},
            {_id: "123", title: "Topic B"},
            {_id: "123", title: "Topic C"}
        ],
        findTopicsForLesson,
        createTopic,
        updateTopic,
        deleteTopic,
        refresh
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    useEffect(() => {
        refresh()
        if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        }
    }, [lessonId])
    return(
    <div>
        <h2>Topics</h2>
        <ul className="nav nav-pills">
            {
                topics.map(topic =>
                    <li className="nav-item">
                        <EditableItem
                            active={topic._id === topicId}
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}/topics/${topic._id}`}
                            deleteItem={deleteTopic}
                            updateItem={updateTopic}
                            item={topic}/>
                    </li>
                )
            }
            <li>
                <i onClick={() => createTopic(lessonId)} className="fas fa-plus"></i>
            </li>
        </ul>
    </div>)}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})
const dtpm = (dispatch) => ({
    refresh: () => {
    const RESET_ACTION = {
              type: "RESET"
            }
            dispatch(RESET_ACTION)
    },
    findTopicsForLesson: (lessonId) => {
        console.log("LOAD TOPICS FOR LESSON:")
        console.log(lessonId)


        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS",
                topics
            }))


    },
    createTopic: (lessonId) => {
        topicService
            .createTopic(lessonId, {title: "New Topic"})
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic
            }))
    },
     updateTopic: (topic) =>
                    topicService.updateTopic(topic._id, topic)
                        .then(status => dispatch({
                            type: "UPDATE_TOPIC",
                            topic
                        })),
        deleteTopic: (topicToDelete) => {
            topicService.deleteTopic(topicToDelete._id)
                .then(status => dispatch({type: "DELETE_TOPIC", topicToDelete: topicToDelete}))
        },
})

export default connect(stpm, dtpm)(TopicPills)
