import { combineReducers } from "redux";
import loginSlice from "../Authentication/Login/_redux/LoginSlice";
const rootReducer = combineReducers({
    loginCredentials: loginSlice.reducer,
});

export default rootReducer;
