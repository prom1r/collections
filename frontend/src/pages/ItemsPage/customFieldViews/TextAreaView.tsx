import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


interface TextAreaStringProps {
    name: string;
    value: string;
}

export const TextAreaView: React.FC<TextAreaStringProps> = (props) => {
    return (
        <Grid container item spacing={3}>
            <Typography gutterBottom sx={{
                paddingLeft: '20px',
                fontSize: '20pt'
            }}>
                <strong>{props.name}</strong> {props.value}
            </Typography>
        </Grid>
    );
}
