import { combineReducers } from "redux";
// import loginSlice from "../Authentication/Login/_redux/LoginSlice";
import TodosSlice from "../Modules/Todos/_redux/TodosSlice"
const rootReducer = combineReducers({
    // loginCredentials: loginSlice.reducer,
    todosListInformation: TodosSlice.reducer,
});

export default rootReducer;
