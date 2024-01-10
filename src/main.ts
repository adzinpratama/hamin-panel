import { createApp } from "vue";
import { Icon } from "@iconify/vue";
import App from "./App.vue";
import routers from "./router";
import clickOutSide from "./directives/clickOutSide/index.js";
import "./scss/main.scss";

createApp(App)
  .use(routers)
  .use(clickOutSide)
  .component("Icon", Icon)
  .mount("#app");
