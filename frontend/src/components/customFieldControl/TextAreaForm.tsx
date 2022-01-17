import React,{FC} from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';

interface TextareaFormmProps {
    setValues: any;
    index: number;
    name:string;
    formik:any;
}

export const TextareaForm:React.FC<TextareaFormmProps> = (props) => {
    props.setValues(props.index, props.formik.values[props.name])
    return (
        <TextareaAutosize 
            id={props.name}
            onChange={props.formik.handleChange}
            aria-label="empty textarea"
            placeholder="Empty"
            style={{ width: '13em' }}
        />
    );
}