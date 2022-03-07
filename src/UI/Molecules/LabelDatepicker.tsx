import React from 'react';
import { DatePicker, Label } from '../Atoms/atoms';
interface Props {
  datePickerClasses?: any;
  mainClass?: string;
  labelValue?: string;
  labelClasses?: object;
  dateProps: {
    value: any;
    onChange: any;
    maxDate?: any;
  };
}
export default function LabelDatepicker({
  datePickerClasses,
  mainClass,
  labelValue,
  labelClasses,
  dateProps
}: Props) {
  return (
    <div className={mainClass}>
      <Label value={labelValue} classes={labelClasses} />
      <DatePicker className={datePickerClasses} dateProps={dateProps} />
    </div>
  );
}
