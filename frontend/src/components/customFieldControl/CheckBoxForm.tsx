import React, { useState, FC } from 'react';
import Checkbox from '@mui/material/Checkbox';

interface CheckboxFormProps {
    index: number;
    values: any;
    formik: any;
}

export const CheckboxForm: React.FC<CheckboxFormProps> = (props) => {

    const handleChange = (event) => {
        props.formik.handleChange(event);
    };

    return (
        <Checkbox
            name={`customField.${props.index}.value`}
            checked={props.values}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    );
}