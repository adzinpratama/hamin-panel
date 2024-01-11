import { RouteRecordRaw } from "vue-router";
import { RouteInterface, RouteMeta } from "./routerInterface";
import ButtonPage from "../pages/components/ButtonPage.vue";

export const componentRouter: Array<
  RouteRecordRaw & { meta: RouteMeta; children?: RouteInterface }
> = [
  {
    name: "ButtonComponent",
    path: "/component/buttons",
    component: ButtonPage,
    meta: {
      title: "Buttons",
      icon: "teenyicons:button-outline",
      description: "Buttons Layout page",
    },
  },
];
