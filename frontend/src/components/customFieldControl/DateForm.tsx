import React, { useState,FC } from 'react';
import Box from '@mui/material/Box';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DatePicker';

interface DateFormProps {
    setValues: any;
    index: number;
    name:string;
    formik:any;
}

export const DateForm:React.FC<DateFormProps> = (props) => {
    const [value, setValue] = useState(new Date());
    props.setValues(props.index,value)
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                label="Custom input"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={({ inputRef, inputProps, InputProps }) => (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <input ref={inputRef} {...inputProps} />
                        {InputProps?.endAdornment}
                    </Box>
                )}
            />
        </LocalizationProvider>
    );
}