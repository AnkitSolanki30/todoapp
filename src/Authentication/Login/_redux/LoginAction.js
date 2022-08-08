import * as requestFromServer from "./LoginCRUD";
// import loginSlice from "./LoginSlice";
import { setCookie } from "../../../utils/cookieUtils";
import { errorNotification, successNotification } from "../../../base/Notification/BasicNotification";

// const { actions } = loginSlice

// eslint-disable-next-line
const ACCESS_TOKEN = "TodoAccessToken";

// LOGIN API
export const login = (data) => (dispatch) => {
    return requestFromServer.login(data).then((response) => {
        let message = response.data.msg;
        if (response.data.code === 200) {
            localStorage.setItem("userName", response.data.data.user);
            // localStorage.setItem("user", "admin");
            setCookie(ACCESS_TOKEN, response.data.data.token);
            // const token = response.data.data.token;
            // const user = response.data.data.user;
            // dispatch(actions.setUser({ user }));
            // dispatch(actions.setToken({ token }));
            successNotification(message);
        } else {
            errorNotification(message);
        }
    });
};
