import { createApp } from "vue";
import { Icon } from "@iconify/vue";
import App from "./App.vue";
import routers from "./router";
// import clickOutSide from "./directives/clickOutSide/index.js";
import "./scss/main.scss";
import { createPinia } from "pinia";
import directives from "./directives";

const app = createApp(App)
  .use(routers)
  .component("Icon", Icon)
  .use(createPinia());

directives(app);
app.mount("#app");
