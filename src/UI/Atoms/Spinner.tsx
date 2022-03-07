import React from 'react';
import { Box, CircularProgress } from '@mui/material';

interface Props {
  classes?: any;
  spinnerCont?: string;
  props?: any;
}
export default function Spinner({ classes, spinnerCont, ...props }: Props) {
  return (
    <Box className={`flex justify-center ${spinnerCont}`}>
      <CircularProgress color='error' size={25} {...props} classes={classes} />
    </Box>
  );
}
