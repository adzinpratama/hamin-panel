import { RouteRecordRaw } from "vue-router";
import { RouteInterface, RouteMeta } from "./routerInterface";
import ResponsivePageVue from "../pages/table/ResponsivePage.vue";

export const tableRouter: Array<
  RouteRecordRaw & { meta: RouteMeta; children?: RouteInterface }
> = [
  {
    name: "TableResponsive",
    path: "/table/responsive",
    component: ResponsivePageVue,
    meta: {
      title: "Table Responsive",
      icon: "material-symbols:table-chart-outline",
    },
  },
];
