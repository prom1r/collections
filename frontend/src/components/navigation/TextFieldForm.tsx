import React,{FC} from 'react';
import TextField from '@mui/material/TextField';

interface TextFieldFormProps {
    setValues: any;
    index: number;
    name:string;
    formik:any;
}

export const TextFieldForm:React.FC<TextFieldFormProps> = (props) => {
    props.setValues(props.index,props.formik.values[props.name])
 
    return (
        <div>
            <TextField sx={{
                width:'13em'
            }}
                id={props.name}
                name={props.name}
                onChange={props.formik.handleChange}
            />
        </div>
    );
};

