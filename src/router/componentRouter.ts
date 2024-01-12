import { RouteRecordRaw } from "vue-router";
import { RouteInterface, RouteMeta } from "./routerInterface";
import ButtonPage from "../pages/components/ButtonPage.vue";
import TooltipPage from "../pages/components/TooltipPage.vue";

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
  {
    name: "TooltipComponent",
    path: "/component/tooltips",
    component: TooltipPage,
    meta: {
      title: "Tooltip",
      icon: "tabler:tooltip",
      description: "Tooltips Layout page",
    },
  },
];
