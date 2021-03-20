import React, {useState, useEffect} from 'react'
import {connect} from "react-redux";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
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
    const {topicId} = '6044501163561d001713debb'
    const [widget, setWidget] = useState({})
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
                                            _widget.id === widget.id &&
                                                <>
                                                    <i onClick={() => deleteWidget(_widget.id)} className="fas fa-trash float-right"></i>
                                                    <i onClick={() => {
                                                    setWidget({})

                                                        updateWidget(widget)

                                                    }} className="fas fa-check float-right"></i>
                                                </>
                                        }
                                        {
                                            _widget.id !== widget.id &&
                                            <i onClick={() => setWidget(_widget)} className="fas fa-cog float-right"></i>
                                        }
                                        {
                                            _widget.type === "HEADING" &&
                                            <HeadingWidget
                                                setWidget={setWidget}
                                                editing={_widget.id === widget.id}
                                                widget={widget}/>
                                        }
                                        {
                                            _widget.type === "PARAGRAPH" &&
                                            <ParagraphWidget
                                                setWidget={setWidget}
                                                editing={_widget.id === widget.id}
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
