import React from 'react';
import Proptype from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
interface Props {
  alt?: string;
  props?: object;
  value?: string;
  src?: string;
  classes?: any;
  onClick?: any;
}
function AvatarAtom({ alt, props, value, src, classes }: Props) {
  return (
    <Avatar {...props} alt={alt} src={src} classes={classes}>
      {value}
    </Avatar>
  );
}

AvatarAtom.defaultProps = {
  variant: 'circle'
};
AvatarAtom.propType = {
  variant: Proptype.oneOf(['circle', 'circular', 'rounded', 'square']),
  src: Proptype.string,
  sizes: Proptype.string,
  alt: Proptype.string
};
export default AvatarAtom;
