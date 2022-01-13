import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    boxShadow: '0px 0px 0px 0px',
    backgroundSize: 'cover'
}));


export const CollectionHeader = (props) => {
    const { _id, title, srcImg, category, description } = props.collection;

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
                        <Typography gutterBottom variant="h2" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Item>
                                <Chip label={category} variant="outlined"/>
                            </Item>
                            <Item>
                                <Typography gutterBottom variant="h6" color="text.secondary">
                                    {props.itemsCount} items
                                </Typography>
                            </Item>
                            <Item>
                                <Chip variant="outlined" icon={<FaceIcon/>} label='Autor:DimasKarabas'/>
                            </Item>
                        </Stack>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
