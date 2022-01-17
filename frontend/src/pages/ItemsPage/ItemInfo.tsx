import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { ItemFieldControl } from 'components/itemFieldControl/ItemFieldControl';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    boxShadow: '0px 0px 0px 0px',
    backgroundSize: 'cover'
}));


export const ItemInfo = (props) => {
    const { title, srcImg, description, collectionTitle, collectionId, customField } = props.item;

    return (
        <Box sx={{
            flexGrow: 1,
            paddingTop: 3,
        }}>
            <Grid container spacing={2}>
                <Grid item xs={6} textAlign='left' marginLeft='10px' marginBottom='10px'>
                    <Link style={{ textDecoration: 'none' }} to={`/collection/${collectionId}`}>
                        <Button variant="contained" startIcon={<ArrowBackIosNewIcon fontSize='large' />}>
                            Back to {collectionTitle}
                        </Button>
                    </Link>
                </Grid>

            </Grid>
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
                        <Grid container spacing={2}>
                            <Typography gutterBottom variant="h2" component="h2">
                                {title}
                            </Typography>
                        </Grid>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </Item>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid container item spacing={3}>
                    {customField.map(item => <ItemFieldControl item={item} />)}
                </Grid>
            </Grid>
        </Box>

    );
}
