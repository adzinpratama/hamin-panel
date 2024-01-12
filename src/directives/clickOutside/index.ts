import directive from "./clickOutSide";

const clickOutSideDirective = (app: any): void => {
  app.directive("click-outside", directive);
};

export default clickOutSideDirective;
