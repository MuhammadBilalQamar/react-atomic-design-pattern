import * as React from 'react';
import Box from '@mui/material/Box';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DatePicker';
interface PropsT {
  className?: any;
  dateProps: {
    value: any;
    onChange: any;
    maxDate?: any;
  };
}
export default function CustomInput(props: PropsT) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label='Custom input'
        {...props.dateProps}
        renderInput={({ inputRef, inputProps, InputProps }) => (
          <Box
            sx={{ display: 'flex', alignItems: 'center' }}
            className='border border-red-700 px-2 rounded'
          >
            <input
              ref={inputRef}
              {...inputProps}
              className='focus:outline-none text-sm py-2 w-24'
            />
            {InputProps?.endAdornment}
          </Box>
        )}
      />
    </LocalizationProvider>
  );
}
