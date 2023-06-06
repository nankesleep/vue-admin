import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "../src/assets/rest.css";
import axios from "axios";

Vue.config.productionTip = false;

Vue.use(Element).use(axios);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
