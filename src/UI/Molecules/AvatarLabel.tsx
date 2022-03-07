import React from 'react';
import { Label, Avatar } from "../Atoms/atoms"
interface Props {
    src?: string
    value?: any
    avatarProps?: object
    labelProps?: object
}
export default function AvatarLabel({ src="", value="", labelProps={}, avatarProps={} }: Props) {
    return <div>
        <Avatar src={src} props={avatarProps} />
        <Label value={value} props={labelProps} />
    </div>;
}
