import instance from "../../../ApiCalls";

export const Signup_URL = "/api/user/signup";

//SIGNUP
export function signup(data) {
    return instance.post(window.$BASE_URL + Signup_URL, data);
  }
