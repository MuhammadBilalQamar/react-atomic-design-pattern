import React from 'react';
import Button from '@material-ui/core/Button';
import Proptype from 'prop-types';
interface Props {
  value: string;
  classes?: any;
  children?: any;
  onClick?: any;
}
function ButtonAtom(props: Props) {
  const { value, classes, children } = props;
  return (
    <Button {...props} classes={classes}>
      {value}
      {children}
    </Button>
  );
}
ButtonAtom.defaultProps = {
  color: 'default',
  disabled: false,
  size: 'medium',
  variant: 'contained'
};
ButtonAtom.prototype = {
  color: Proptype.oneOf(['default', 'inherit', 'primary']),
  disabled: Proptype.bool,
  href: Proptype.string,
  size: Proptype.oneOf(['large', 'medium', 'small']),
  variant: Proptype.oneOf(['contained', 'outlined', 'text']),
  classes: Proptype.object,
  value: Proptype.string
};
export default ButtonAtom;
