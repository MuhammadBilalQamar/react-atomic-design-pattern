import React from 'react';
import { TextField } from '@material-ui/core';
import Proptype from 'prop-types';
interface Props {
  props: object;
}
function TextInput({ props }: Props) {
  return (
    <div>
      <TextField {...props} />
    </div>
  );
}
TextInput.defaultProps = {
  color: 'primary',
  disabled: false,
  multiline: false,
  required: true,
  select: false,
  variant: 'outlined',
  onChange: () => {},
  classes: () => {}
};

TextInput.prototype = {
  classes: Proptype.object,
  defaultValue: Proptype.any,
  autoComplete: Proptype.string,
  disabled: Proptype.bool,
  fullWidth: Proptype.bool,
  InputLabelProps: Proptype.object,
  inputProps: Proptype.object,
  //   inputRef: Proptype.ref,
  margin: Proptype.oneOf(['dense', 'none', 'normal']),
  multiline: Proptype.bool,
  name: Proptype.string,
  onChange: Proptype.func,
  placeholder: Proptype.string,
  required: Proptype.bool,
  select: Proptype.bool,
  size: Proptype.oneOf(['medium', 'small']),
  type: Proptype.string,
  value: Proptype.any,
  variant: Proptype.oneOf(['filled', 'outlined', 'standard'])
};

export default TextInput;
