import tooltipDirective from "./Tooltip";
import clickOutSideDirective from "./clickOutside";

// register all directives
const directives = (app: any) => {
  tooltipDirective(app);
  clickOutSideDirective(app);
};

export default directives;
