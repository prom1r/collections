import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: '0px 0px 0px 0px',
    backgroundSize: 'cover'
}));


export const ItemInfo = (props) => {
    const {  title, srcImg, description } = props.item;


    return (
        <Box sx={{
            flexGrow: 1,
            paddingTop: 3,
        }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Item>
                        <CardMedia
                            component="img"
                            height="500"
                            image={srcImg}
                            alt={title}
                        />
                    </Item>
                </Grid>
                <Grid item xs={8}>
                    <Item>
                        <Typography gutterBottom variant="h3" component="div">
                            COLLECTION: {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
