import { createApp } from "vue";
import { Icon } from "@iconify/vue";
import App from "./App.vue";
import routers from "./router";
import clickOutSide from "./directives/clickOutSide/index.js";
import "./scss/main.scss";
import { createPinia } from "pinia";

createApp(App)
  .use(routers)
  .use(clickOutSide)
  .component("Icon", Icon)
  .use(createPinia())
  .mount("#app");
