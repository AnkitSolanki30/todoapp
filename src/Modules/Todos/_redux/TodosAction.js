import * as requestFromServer from "./TodosCRUD"
import TodosSlice from "./TodosSlice";
import { errorNotification, successNotification } from "../../../base/Notification/BasicNotification";

const { actions } = TodosSlice;

//CREATE Todo
export const createTodos = (data) => (dispatch) => {
    return requestFromServer.createTodo(data).then((response) => {
        console.log(response);
        let msg = response.data.msg;
        let code = response.data.code;
        if (code === 200) {
            successNotification(msg);
            console.log("RESP DATA", response.data.data)
            dispatch(actions.createdResponse({ createTodos: response.data.data }))
        } else {
            errorNotification(msg);
        }
    });
};

//Get All Todos
export const fetchTodos = (urlData) => async dispatch => {
    const response = await requestFromServer.getTodos(urlData)
    if (response.data.code === 200) {
        console.log("RESP DATA", response)
        // console.log("RESP DATA", response.data.meta.currentPage)
        if (response.data.meta.currentPage === 1) {
            dispatch(actions.setTodos({ todos: response.data.data, totalCount:response.data.meta.totalRecords, totalPage: response.data.meta.totalPages }))
        } else {
            dispatch(actions.setOtherTodos({ todos: response.data.data }))
        }
    } else {
        errorNotification(response.data.msg)
    }
};

//Get Single Todo


//Delete Todo
export const deleteTodos = (id) => (dispatch) => {
    return requestFromServer.deleteTodo(id).then((response) => {
        let msg = response.data.msg;
        let code = response.data.code;
        if (code === 200) {
            // successNotification(msg);
            // setTimeout(() => {
            //     window.location.reload()
            //   }, 2500);
        } else {
            errorNotification(msg);
        }
    })
}

//Edit Todo
export const editTodos = (editData, id) => (dispatch) => {
    console.log(editData, id);
    return requestFromServer.editTodo(editData, id).then((response) => {
        console.log(response);
        let msg = response.data.msg;
        let code = response.data.code;
        if (code === 200) {
            successNotification(msg);
        } else {
            errorNotification(msg);
        }
    });
};