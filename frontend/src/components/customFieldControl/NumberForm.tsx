import React, { FC } from 'react';
import TextField from '@mui/material/TextField';

interface NumberFormProps {
    index: number;
    name: string;
    formik: any;
    values: number;
}

export const NumberForm: React.FC<NumberFormProps> = (props) => {
    return (
        <TextField sx={{
            width: '13em'
        }}
                   id={props.name}
                   name={`customField.${props.index}.value`}
                   value={props.values}
                   onChange={props.formik.handleChange}
                   label="Number"
                   type="number"
                   InputLabelProps={{
                       shrink: true,
                   }}
        />
    );
}
