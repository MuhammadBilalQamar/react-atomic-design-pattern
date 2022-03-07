import React from 'react';
import { Select as SelectItem, MenuItem, Input } from '@material-ui/core';
import Proptype from 'prop-types';
interface Props {
  props?: object;
  placeholder?: string;
  options?: Array<any>;
  inputProps?: any;
  selectState?: {
    value?: any;
    onChange?: any;
  };
}
function Select({
  props,
  placeholder,
  options,
  inputProps,
  selectState
}: Props) {
  return (
    <SelectItem {...props} input={<Input {...inputProps} />} {...selectState}>
      {/* {props.value || ""} */}
      <MenuItem selected={true} value='placeholder' disabled>
        {placeholder}
      </MenuItem>
      {options?.map((v, k) => (
        <MenuItem key={k} value={v.value}>
          {v.name}
        </MenuItem>
      ))}
    </SelectItem>
  );
}
Select.defaultProps = {
  options: [],
  autoWidth: true,
  id: 'id',
  variant: 'standard',
  displayEmpty: true,
  inputProps: 'object',
  onChange: () => {},
  className: 'default',
  color: '#9E6195'
};

Select.prototype = {
  autoWidth: Proptype.bool,
  defaultValue: 'any',
  displayEmpty: Proptype.bool,
  id: Proptype.string,
  input: Proptype.element,
  inputProps: Proptype.object,
  multiple: Proptype.bool,
  onChange: Proptype.func,
  value: Proptype.any,
  classes: Proptype.object,
  renderValue: Proptype.func,
  variant: Proptype.oneOf(['filled', 'outlined', 'standard'])
};

export default Select;
