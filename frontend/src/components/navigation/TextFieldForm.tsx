import React, { FC } from 'react';
import TextField from '@mui/material/TextField';

interface TextFieldFormProps {
    index: number;
    name: string;
    formik: any;
    values:string;
}

export const TextFieldForm: React.FC<TextFieldFormProps> = (props) => {

    return (
        <div>
            <TextField sx={{
                width: '13em'
            }}
                       id={props.name}
                       name={`customField.${props.index}.value`}
                       onChange={props.formik.handleChange}
                       value={props.values}
            />
        </div>
    );
};

