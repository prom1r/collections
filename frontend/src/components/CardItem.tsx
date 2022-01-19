import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const CardItem = (props) => {
    const { title, srcImg, description } = props.item;
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
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}

