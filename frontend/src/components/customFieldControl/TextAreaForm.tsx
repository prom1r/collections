import React, { FC } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';


interface TextareaFormmProps {
    index: number;
    name: string;
    formik: any;
    values:string;
}

export const TextareaForm: React.FC<TextareaFormmProps> = (props) => {
    return (
        <TextareaAutosize
            name={`customField.${props.index}.value`}
            value={props.values}
            id={props.name}
            onChange={props.formik.handleChange}
            aria-label="empty textarea"
            placeholder="supports markdown"
            style={{ width: '13em' }}
        />
    );
}