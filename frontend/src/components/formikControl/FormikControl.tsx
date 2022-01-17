import React from 'react';
import { Textarea } from './Textarea';
import { Select } from './Select';
import { Input } from './Input';

export const FormikControl = (props) => {
    const { control, ...rest } = props;
    switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'textarea':
            return <Textarea {...rest} />
        case 'select':
            return <Select {...rest} />
        default:
            return null
    }
}