import router from "./router";
import { getToken } from "@/utils/auth";
import store from "./store";
import { Message } from "element-ui";

const whiteList = ["/login"];

router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      if (store.getters.roles.length === 0) {
        store
          .dispatch("GetInfo")
          .then((res) => {
            console.log(res);
            next();
          })
          .catch((err) => {
            Message.error(err);
          });
      } else {
        next();
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.fullPath}`);
    }
  }
});
