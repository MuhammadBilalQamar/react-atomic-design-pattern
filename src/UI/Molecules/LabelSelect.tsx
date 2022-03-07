import React from 'react';
import { Select, Label } from '../Atoms/atoms';
interface Props {
  mainClass?: string;
  placeholder?: string;
  options?: Array<any>;
  labelValue?: string;
  labelClasses?: object;
  selectProps?: any;
  inputProps?: any;
  selectState?: {
    value?: any;
    onChange?: any;
  };
}
export default function LabelSelect({
  mainClass,
  placeholder,
  options,
  labelValue,
  labelClasses,
  selectProps,
  inputProps,
  selectState
}: Props) {
  return (
    <div className={mainClass}>
      <Label value={labelValue} classes={labelClasses} />
      <Select
        placeholder={placeholder}
        options={options}
        props={selectProps}
        inputProps={inputProps}
        selectState={selectState}
      />
    </div>
  );
}
