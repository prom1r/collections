import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import formatRelative from "date-fns/formatRelative";

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: '0px 0px 0px 0px',
    border:'2px solid',
    minWidth:'300px',
    maxWidth:'400px'
}));

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export const RecentCardItem = (props) => {
    const { title, srcImg, userNickname, date } = props.item;
    const newDate = new Date(date);
    const resultDate = formatRelative(newDate, new Date());

    return (
        <Item>
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="complex" src={srcImg}/>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {resultDate}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {userNickname}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Item>
    );
}