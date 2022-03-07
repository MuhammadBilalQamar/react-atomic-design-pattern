import React from 'react'
import { Label, Input } from "../Atoms/atoms"
interface Props {
    labelValue?: string;
    labelClasses?: object;
    placeholder?: string;
    inputClasses?: object;
    inputProps?: object;
    mainClass?: string
}
export default function LabelInput({
    labelValue,
    labelClasses,
    placeholder,
    inputClasses,
    inputProps,
    mainClass
}: Props) {
    return (
        <div className={mainClass}><Label value={labelValue} classes={labelClasses} /><Input placeholder={placeholder} classes={inputClasses} props={inputProps} /></div>
    )
}
