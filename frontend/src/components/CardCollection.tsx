import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Collection } from '../models/collections';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';


interface CardCollectionProps {
    collection: Collection;
}

export const CardCollection: FC<CardCollectionProps> = (props) => {
    const { _id, title, srcImg, itemsCount, category } = props.collection;
    return (
        <Card sx={{
            maxWidth: 345,
            boxShadow: 10,
            minWidth: 200,
        }}>
            <Typography gutterBottom variant="h5" component="div" sx={{
                paddingTop: '10px',
            }}>
                {title}
            </Typography>
            <CardMedia
                component="img"
                alt={title}
                height="140"
                image={srcImg}
            />
            <CardContent sx={{
                paddingTop: '0px',
                paddingBottom: '0px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around'

            }}>
                <Typography fontSize='1.3em' sx={{
                    verticalAlign: 'middle'
                }}>
                    {itemsCount} items
                </Typography>
                <Chip label={category} color="success" variant="outlined"/>
            </CardContent>
        </Card>
    );
}
