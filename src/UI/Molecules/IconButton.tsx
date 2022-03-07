import React from 'react';
import { Button, Image } from "../Atoms/atoms"
interface Props {
    buttonValue?: string,
    buttonClasses?: object,
    buttonProps?: any,
    imageProps?: any,
    imageSrc?: string,
    imageAlt?: string,
    imageClasses?: string
}
export default function IconButton({ buttonValue, buttonClasses, buttonProps, imageClasses, imageAlt, imageSrc, imageProps }: Props) {
    return <Button value={`${buttonValue}`} classes={buttonClasses} {...buttonProps}>
        <Image src={imageSrc} alt={imageAlt} classes={imageClasses} {...imageProps} />
    </Button>
}
