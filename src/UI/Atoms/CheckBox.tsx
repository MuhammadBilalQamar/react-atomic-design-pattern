import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Proptype from "prop-types";
interface Props{
    props:object
}
function CheckboxAtom({props}:Props) {
  return <Checkbox {...props} />;
}
CheckboxAtom.defaultProps = {
  color: "default",
  disabled: false,
  size: "medium",
  classes: () => {},
};
CheckboxAtom.prototype = {
  color: Proptype.oneOf(["default", "primary", "secondary"]),
  disabled: Proptype.bool,
  size: Proptype.oneOf(["medium", "small"]),
  classes: Proptype.object,
};
export default CheckboxAtom;
