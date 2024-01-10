import { RouteRecordRaw } from "vue-router";

export interface RouteMeta {
  title: String;
  icon?: String;
  isParent?: Boolean;
  description?: String;
}

export declare type RouteInterface = Omit<RouteRecordRaw, "meta"> & {
  meta: RouteMeta;
};
