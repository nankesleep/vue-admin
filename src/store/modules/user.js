import { login } from "@/api/login";
import { getToken, setToken, removeToken } from "@/utils/auth";
import { getInfo } from "@/api/login";

const user = {
  state: {
    token: getToken(),
    roles: [],
    permissions: [],
    avatar: "",
    name: "",
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
  },
  actions: {
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim();
      const password = userInfo.password.trim();
      const code = userInfo.code.trim();
      const uuid = userInfo.uuid;
      return new Promise((resolve, reject) => {
        login(username, password, code, uuid)
          .then((res) => {
            commit("SET_TOKEN", res.token);
            setToken(res.token);
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo()
          .then((res) => {
            const user = res.user;
            const avatar =
              user.avatar === "" || user.avatar === null
                ? require("@/assets/image/profile.jpg")
                : process.env.VUE_APP_BASE_URL + user.avatar;
            if (res.roles && res.roles.length > 0) {
              commit("SET_ROLES", res.roles);
              commit("SET_PERMISSIONS", res.permissions);
            } else {
              commit("SET_ROLES", ["ROLE_DEFAULT"]);
            }
            commit("SET_NAME", user.username);
            commit("SET_AVATAR", avatar);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
};

export default user;
