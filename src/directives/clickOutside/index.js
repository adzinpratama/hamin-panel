import directive from "./clickOutSide";

const plugin = {
  install(Vue) {
    Vue.directive("click-outside", directive);
  },
  directive,
};

export default plugin;
