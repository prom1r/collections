import React,{FC} from 'react';
import TextField from '@mui/material/TextField';

interface NumberFormProps {
    setValues: any;
    index: number;
    name:string;
    formik:any;
}

export const NumberForm :React.FC<NumberFormProps>= (props) => {
    props.setValues(props.index, props.formik.values[props.name])
    return (
            <TextField  sx={{
                width:'13em'
            }}
                id={props.name}
                onChange={props.formik.handleChange}
                label="Number"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
            />
    );
}
