import { RouteRecordRaw } from "vue-router";
import { RouteInterface, RouteMeta } from "./routerInterface";
import ModalPage from "../pages/modal/ModalPage.vue";

export const modalRouter: Array<
  RouteRecordRaw & { meta: RouteMeta; children?: RouteInterface }
> = [
  {
    name: "ModalGeneral",
    path: "/modal/general",
    component: ModalPage,
    meta: {
      title: "Modal",
      icon: "material-symbols:table-chart-outline",
      description: "Contoh Layout modal ",
    },
  },
];
