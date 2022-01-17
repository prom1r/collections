import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


interface BooleanStringProps {
    name:string;
    value:string;
}

export const BooleanString:React.FC<BooleanStringProps> = (props) => {
    const result = props.value ? 'Yes' :'No';
    return (
        <Grid container item spacing={3}>
            <Typography gutterBottom variant="h4" component="h4" sx={{paddingLeft:'50px'}}>
                {props.name}:{result}
            </Typography>
        </Grid>
    );
}
