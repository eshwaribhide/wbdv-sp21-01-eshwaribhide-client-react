import React, {useState, useEffect} from 'react'
import {connect} from "react-redux";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import ListWidget from "./list-widget";
import {useParams} from "react-router-dom";
import widgetActions from "../../actions/widget-actions";

const WidgetList = (
    {
        widgets=[],
        createWidget,
        updateWidget,
        deleteWidget,
        findWidgetsForTopic
    }) => {
    const {topicId} = useParams()
    useEffect(() => {
        findWidgetsForTopic(topicId)
    }, [topicId])

    return(
        <div>
            <i onClick={() => createWidget(topicId)} className="fas fa-plus fa-2x float-right"></i>
            <h2>Widget List </h2>
            <ul className="list-group">
                            {

                                widgets && widgets.map(_widget =>
                                    <li key={_widget.id} className="list-group-item">

                                        {
                                            _widget.type === "HEADING" &&
                                            <HeadingWidget
                                                updateWidget={updateWidget}
                                                deleteWidget={deleteWidget}
                                                widget={_widget}/>
                                        }
                                        {
                                            _widget.type === "PARAGRAPH" &&
                                            <ParagraphWidget
                                                updateWidget={updateWidget}
                                                deleteWidget={deleteWidget}
                                                widget={_widget}/>
                                        }

                                        {
                                            _widget.type === "LIST" &&
                                            <ListWidget
                                                updateWidget={updateWidget}
                                                deleteWidget={deleteWidget}
                                                widget={_widget}/>
                                        }
                                    </li>
                                )
                            }
                        </ul>
        </div>
    )
}

const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})
const dtpm = (dispatch) => ({
    createWidget: (topicId) => widgetActions.createWidget(dispatch, topicId),
    updateWidget: (newItem) => widgetActions.updateWidget(dispatch, newItem),
    deleteWidget: (widgetToDelete) => widgetActions.deleteWidget(dispatch, widgetToDelete),
    findWidgetsForTopic: (topicId) => widgetActions.findWidgetsForTopic(dispatch, topicId),
})


export default connect(stpm, dtpm)(WidgetList)
