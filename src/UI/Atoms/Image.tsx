import React from 'react';
interface Props {
    src?: string,
    alt?: string,
    classes?: string,
    onClick?: any
}
export default function Image({ src, alt, classes, onClick }: Props) {
    return <img src={src} alt={alt} className={classes} onClick={onClick} />;
}
