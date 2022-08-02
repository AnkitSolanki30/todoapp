import axios from "axios";
import { getCookie } from "./utils/cookieUtils";
const ACCESS_TOKEN = "TodoAccessToken";
const Base_URL = process.env.REACT_APP_BASE_URL;
const instance = axios.create({ baseURL: Base_URL });
instance.interceptors.request.use(
  (config) => {
    const accessToken = getCookie(ACCESS_TOKEN);
    if (accessToken) {
      config.headers["Authorization"] = `${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
