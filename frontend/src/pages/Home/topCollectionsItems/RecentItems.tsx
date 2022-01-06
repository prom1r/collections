import React, { FC, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import {getTopItem} from "../../../api/itemsService";
import Stack from "@mui/material/Stack";
import {CardItem} from "../../../components/CardItem";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";


const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width:"250px"
}));

interface TopItemsProps {
    items: object[];
}

export const RecentItems: FC<TopItemsProps> = (props) => {
    const [items, setItem] = useState([])
    useEffect(() => {
        getTopItem().then((result) => {
            setItem(result)
        })
    })
    if (!items || items.length === 0) return <p>Нет данных.</p>
    return (
        <Box sx={{
            width: '0 auto',
            height: 500,
            backgroundColor: 'grow',
            marginLeft: '100px',
            marginTop:'50px'

        }}
        >
            <Stack direction="row" spacing={2}>
                {items.map(item => (
                    <Item>
                        <CardItem item={item}/>
                    </Item>))}
            </Stack>
        </Box>
    );
}