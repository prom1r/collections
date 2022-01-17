import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


interface TextAreaStringProps {
    name: string;
    value: string;
}

export const TextAreaString: React.FC<TextAreaStringProps> = (props) => {
    return (
        <Grid container item spacing={3}>
            <Typography gutterBottom variant="h4" component="h4" sx={{ paddingLeft: '50px' }}>
                {props.name}:{props.value}
            </Typography>
        </Grid>
    );
}
