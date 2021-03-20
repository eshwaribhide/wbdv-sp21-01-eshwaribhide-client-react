import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import topicService from '../../services/topic-service'
import topicActions from "../actions/topic-actions";

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
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
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
    refresh: () => topicActions.refresh(dispatch),
    findTopicsForLesson: (lessonId) => topicActions.findTopicsForLesson(dispatch, lessonId),
    createTopic: (lessonId) => topicActions.createTopic(dispatch, lessonId),
    updateTopic: (topic) => topicActions.updateTopic(dispatch, topic),
    deleteTopic: (topicToDelete) => topicActions.deleteTopic(dispatch, topicToDelete),
})

export default connect(stpm, dtpm)(TopicPills)
