import React from "react";
import Typography from '@mui/material/Typography';
import Proptype from "prop-types";
interface Props {
  value?: string
  props?: object
  styleName?: string
  classes?: any,
}
function LabelAtom({ props, value, styleName, classes }: Props) {
  return <Typography {...props} classes={classes} >{styleName || ""}{value}</Typography>;
}

LabelAtom.defaultProps = {
  color: "#ffff",
  align: "start",
  display: "block",
  paragraph: true,
  variant: "default",
};
LabelAtom.prototype = {
  align: Proptype.oneOf(["inherit", "left", "center", "right", "justify"]),
  color: Proptype.oneOf([
    "initial",
    "inherit",
    "primary",
    "secondary",
    "textPrimary",
    "textSecondary",
    "error",
  ]),
  variant: Proptype.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "caption",
    "button",
    "overline",
    "srOnly",
    "inherit",
  ]),
  display: Proptype.oneOf(["initial", "block", "inline"]),
  paragraph: Proptype.bool,

};
export default LabelAtom;
