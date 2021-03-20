import widgetService from "../services/widget-service";

export const CREATE_WIDGET = "CREATE_WIDGET"
export const UPDATE_WIDGET = "UPDATE_WIDGET"
export const DELETE_WIDGET = "DELETE_WIDGET"
export const FIND_WIDGETS_FOR_TOPIC = "FIND_WIDGETS_FOR_TOPIC"

export const createWidget = (dispatch, courseId) => {
    widgetService.createWidget(courseId, {title: 'New Widget'})
        .then(widget => dispatch({type: CREATE_WIDGET, widget: widget}))
}

export const updateWidget = (dispatch, newItem) => {
    widgetService.updateWidget(newItem._id, newItem)
        .then(status => dispatch({type: UPDATE_WIDGET, updateWidget: newItem}))
}

export const deleteWidget = (dispatch, widgetToDelete) => {
    widgetService.deleteWidget(widgetToDelete._id)
        .then(status => dispatch({type: DELETE_WIDGET, widgetToDelete: widgetToDelete}))
}

export const findWidgetsForCourse = (dispatch, courseId) => {
    widgetService.findWidgetsForCourse(courseId)
        .then(widgets => dispatch({
            type: FIND_WIDGETS_FOR_TOPIC,
            widgets: widgets
        }))
}

const widgetActions = {
    createWidget, findWidgetsForCourse, updateWidget, deleteWidget
}

export default widgetActions
