import axios from "axios";
import { Message } from "element-ui";
import { getToken } from "./auth";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000,
});

service.interceptors.request.use((config) => {
  console.log(config);
  const notToken = (config.headers || {}).notToken === true;
  if (getToken() && !notToken)
    config.headers["Authorization"] = "Bearer " + getToken();
  return config;
});

service.interceptors.response.use((res) => {
  const code = res.data.code;
  const msg = res.data.msg;
  if (code === 401) {
    return Promise.reject("无效的会话，请重新登录");
  } else if (code === 500) {
    Message.error(msg);
    return Promise.reject(msg);
  } else if (code !== 200) {
    return Promise.reject(msg);
  } else {
    return res.data;
  }
});

export default service;
