import React, { FC }  from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import formatRelative from 'date-fns/formatRelative';

interface DateStringProps {
    name:string;
    value:string;
}

export const DateString:React.FC<DateStringProps> = (props) => {
    const date = new Date(props.value);
    const resultDate = formatRelative(date, new Date())
    return (
        <Grid container item spacing={3}>
            <Typography gutterBottom variant="h4" component="h4" sx={{paddingLeft:'50px'}}>
                {props.name}:{resultDate}
            </Typography>
        </Grid>
    );
}
