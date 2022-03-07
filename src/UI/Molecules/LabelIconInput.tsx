import React from 'react';
import { Label, Image, Input } from '../Atoms/atoms';
interface Props {
  mainClass?: string;
  labelValue?: string;
  labelClasses?: object;
  placeholder?: string;
  inputclasses?: object;
  inputProps?: object;
  imageSrc?: string;
  imageClasses?: string;
  inputWrapperClass?: string;
  stateP?: {
    value: any;
    onChange: any;
  };
}
export default function LabelIconInput({
  mainClass,
  labelValue,
  labelClasses,
  placeholder,
  inputclasses,
  inputProps,
  imageSrc,
  imageClasses,
  inputWrapperClass,
  stateP
}: Props) {
  return (
    <div className={mainClass}>
      <Label value={labelValue} classes={labelClasses} />
      <div className={inputWrapperClass}>
        <Input
          placeholder={placeholder}
          classes={inputclasses}
          props={inputProps}
          stateP={stateP}
        />
        <Image src={imageSrc} classes={imageClasses} />
      </div>
    </div>
  );
}
