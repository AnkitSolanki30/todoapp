import instance from "../../../ApiCalls";

export const Login_URL = "/api/user/login";

// LOGIN

export function login(data) {
  return instance.post(window.$BASE_URL + Login_URL, data);
}
