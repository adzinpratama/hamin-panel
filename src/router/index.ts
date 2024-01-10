import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Dashboard from "../pages/dashboard/index.vue";
import Form from "../pages/form/index.vue";
import { formRouter } from "./formRouter";
import { RouteInterface, type RouteMeta } from "./routerInterface";

const routes: Array<
  RouteRecordRaw & { meta: RouteMeta; children: RouteInterface[] }
> = [
  {
    name: "dashboard",
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
    component: Form,
    meta: {
      title: "Form",
      icon: "mdi:form-dropdown",
      isParent: true,
    },
    children: formRouter,
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
