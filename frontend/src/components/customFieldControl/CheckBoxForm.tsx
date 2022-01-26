import React, { useState, FC } from 'react';
import Checkbox from '@mui/material/Checkbox';

interface CheckboxFormProps {
    index: number;
    values: any;
    formik: any;
}

export const CheckboxForm: React.FC<CheckboxFormProps> = (props) => {
    const field = `customField.${props.index}.value`;
    const handleChange = (event) => {
        props.formik.setFieldValue(field, event.target.checked);
    };

    return (
        <Checkbox
            id={field}
            name={field}
            checked={props.values}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    );
}