import { componentRouter } from "./componentRouter";
import { modalRouter } from "./modaRouter";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Dashboard from "../pages/dashboard/index.vue";
import { formRouter } from "./formRouter";
import { RouteInterface, type RouteMeta } from "./routerInterface";
import { tableRouter } from "./tableRouter";
import MenuVue from "../pages/layouts/Menu.vue";

const routes: Array<
  RouteRecordRaw & { meta: RouteMeta; children?: RouteInterface[] }
> = [
  {
    name: "Dashboard",
    path: "/",
    component: Dashboard,
    meta: {
      title: "Dashboard",
      icon: "akar-icons:dashboard",
      isParent: true,
    },
  },
  {
    name: "form",
    path: "/form",
    component: MenuVue,
    meta: {
      title: "Form",
      icon: "mdi:form-dropdown",
      isParent: true,
    },
    children: formRouter,
  },
  {
    name: "Table",
    path: "/table",
    component: MenuVue,
    meta: {
      title: "Table",
      icon: "material-symbols:backup-table",
      isParent: true,
    },
    children: tableRouter,
  },
  {
    name: "Modal",
    path: "/modal",
    component: MenuVue,
    meta: {
      title: "Modal",
      icon: "carbon:popup",
      isParent: true,
    },
    children: modalRouter,
  },
  {
    name: "Component",
    path: "/component",
    component: MenuVue,
    meta: {
      title: "Component",
      icon: "tdesign:component-divider-horizontal",
      isParent: true,
    },
    children: componentRouter,
  },
];

const routers = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    // For some reason using documentation example doesn't scroll on page navigation.
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else {
      document.querySelector(".app-layout__page")?.scrollTo(0, 0);
    }
  },
  routes,
});

export default routers;
