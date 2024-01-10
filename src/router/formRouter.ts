import { RouteRecordRaw } from "vue-router";
import FormInput from "../pages/form/InputPage.vue";
import FormValidator from "../pages/form/validator.vue";
import { type RouteMeta } from "./routerInterface";

export const formRouter: Array<RouteRecordRaw & { meta: RouteMeta }> = [
  {
    name: "FormInput",
    path: "/form/input",
    component: FormInput,
    meta: {
      title: "Form Input",
      icon: "ri:input-field",
    },
  },
  {
    name: "FormValidator",
    path: "/form/validator",
    component: FormValidator,
    meta: {
      title: "Form Validator",
      icon: "streamline:interface-validation-check-square-2-check-form-validation-checkmark-success-add-addition-box-square",
    },
  },
];
