import request from "@/utils/request";

export function getCodeImgs() {
  return request({
    url: "/captchaImage",
    method: "get",
    headers: {
      notToken: true,
    },
    timeout: 20000,
  });
}

export function login(username, password, code, uuid) {
  const data = {
    username,
    password,
    code,
    uuid,
  };
  return request({
    url: "/login",
    method: "post",
    headers: {
      notToken: true,
    },
    data: data,
  });
}

export function getInfo() {
  return request({
    url: "/getInfo",
    method: "get",
  });
}
