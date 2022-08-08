import instance from "../../../ApiCalls";

export const Login_URL = "/api/user/";

// UPDATE USER INFORMATION

export function login(data) {
return instance.put(window.$BASE_URL + Login_URL, data);
//   return instance.post(window.$BASE_URL + Login_URL, data);
}
