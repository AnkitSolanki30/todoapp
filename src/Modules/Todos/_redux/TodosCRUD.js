import instance from '../../../ApiCalls'

export const todos_URL = "/api/todo";

//CREATE Todo
export function createTodo(data) {
    return instance.post(window.$BASE_URL + todos_URL, data);
}

//Get All Todos
export function getTodos(url) {
    return instance.get(`${window.$BASE_URL}${todos_URL}${url}`);
}

//Get Single Todo by ID
export function getTodobyID(id) {
    return instance.get(`${window.$BASE_URL}${todos_URL}/${id}`);
}

//Delete Todo
export function deleteTodo(id) {
    return instance.delete(`${window.$BASE_URL}${todos_URL}/${id}`);
}

//Edit Todo
export function editTodo(editData, id) {
    console.log(id, editData);
    return instance.put(`${window.$BASE_URL}${todos_URL}/${id}`, editData);
}