import { RouteRecordRaw } from "vue-router";
import FormInput from "../pages/form/InputPage.vue";
import FormValidator from "../pages/form/validator.vue";
import { type RouteMeta } from "./routerInterface";
import selectVue from "../pages/form/select.vue";
import CheckboxPage from "../pages/form/CheckboxPage.vue";

export const formRouter: Array<RouteRecordRaw & { meta: RouteMeta }> = [
  {
    name: "FormInput",
    path: "/form/input",
    component: FormInput,
    meta: {
      title: "Form Input",
      icon: "ri:input-field",
      description: "Semua Form Input Dalam Template",
    },
  },
  {
    name: "FormValidator",
    path: "/form/validator",
    component: FormValidator,
    meta: {
      title: "Form Validator",
      icon: "streamline:interface-validation-check-square-2-check-form-validation-checkmark-success-add-addition-box-square",
      description: "Contoh Form validator ketika error",
    },
  },
  {
    name: "FormSelect",
    path: "/form/select",
    component: selectVue,
    meta: {
      title: "Form Select",
      icon: "mdi:form-select",
      description: "Form Select kolaborasi dengan vue-select",
    },
  },
  {
    name: "FormCheckbox",
    path: "/form/checkbox",
    component: CheckboxPage,
    meta: {
      title: "Form Checkbox",
      icon: "material-symbols:check-box-outline",
      description: "contoh untuk form checkbox",
    },
  },
];
