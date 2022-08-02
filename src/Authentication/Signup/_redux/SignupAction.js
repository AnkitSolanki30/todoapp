import * as requestFromServer from './SignupCRUD'
import { errorNotification, successNotification } from "../../../base/Notification/BasicNotification";

export const signup = (data) => (dispatch) => {
    return requestFromServer.signup(data).then((response) => {
        let message = response.data.msg;
        
        if (response.data.code === 200) {
            console.log("message:",message);
            successNotification(message);
        } else {
            console.log("message:",message);
            errorNotification(message);
        }
    })
}