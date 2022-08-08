import * as requestFromServer from "./EditUserCRUD";
// import loginSlice from "./LoginSlice";
// import { setCookie } from "../../../utils/cookieUtils";
import { clearCookie } from '../../../utils/cookieUtils';

import { errorNotification, successNotification } from "../../../base/Notification/BasicNotification";

// const { actions } = loginSlice

// eslint-disable-next-line
const ACCESS_TOKEN = "TodoAccessToken";

// LOGIN API
export const editUser = (data) => (dispatch) => {
    return requestFromServer.login(data).then((response) => {
        let message = response.data.msg;
        if (response.data.code === 200) {
            // console.log(response.data.data.user);
            // localStorage.setItem("userName", response.data.data.user);
            // localStorage.setItem("user", "admin");
            // setCookie(ACCESS_TOKEN, response.data.data.token);
            // const token = response.data.data.token;
            // const user = response.data.data.user;
            // dispatch(actions.setUser({ user }));
            // dispatch(actions.setToken({ token }));

            clearCookie(ACCESS_TOKEN);
            localStorage.removeItem("userName");
            successNotification(message);
        } else {
            errorNotification(message);
        }
    });
};
