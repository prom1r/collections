import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Collection } from '../models/collections';
import Typography from '@mui/material/Typography';


interface CardCollectionProps {
    collection: Collection;
}

export const CardCollection: FC<CardCollectionProps> = (props) => {
    const { id, title, srcImg, itemsCount } = props.collection;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                title={title}
            />
            <CardMedia
                component="img"
                height="194"
                image={srcImg}
                alt={title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {itemsCount} ITEMS
                </Typography>
            </CardContent>
        </Card>
    );
}
