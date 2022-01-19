import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import formatRelative from "date-fns/formatRelative";

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    minWidth:'300px',
    maxWidth:'400px',
    boxShadow:  '0 1px 3px rgba(0, 0, 0, .4)'
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
            <Grid container spacing={2} >
                <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="complex" src={srcImg}/>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid  direction="column" container spacing={1}>
                        <Grid sx={{
                            textAlign:'left'
                        }}>

                            <Typography  sx={{
                                paddingTop:'10px',
                                fontSize:'20pt'
                            }}>
                                {title}
                            </Typography>
                            <Typography sx={{
                                paddingTop:'10px'
                            }}>
                                {resultDate}
                            </Typography>
                            <Typography  sx={{
                                paddingTop:'10px'
                            }}>
                                {userNickname}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Item>
    );
}