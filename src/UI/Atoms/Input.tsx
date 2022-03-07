import React from 'react';
import { InputBase } from '@mui/material';
interface Props {
  classes?: object;
  placeholder?: string;
  props?: object;
  stateP?: {
    value: any;
    onChange: any;
  };
}
export default function Input({ classes, placeholder, props, stateP }: Props) {
  return (
    <InputBase
      classes={classes}
      placeholder={placeholder}
      {...props}
      {...stateP}
    />
  );
}
