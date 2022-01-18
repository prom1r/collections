import React, { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { getRecentItems } from "../../../api/itemsService";
import { RecentCardItem } from "../../../components/RecentCardItem";
import { Link } from "react-router-dom";

interface TopItemsProps {
    items: object[];
}

export const RecentItems: FC<TopItemsProps> = (props) => {
    const [items, setItem] = useState([])
    useEffect(() => {
        getRecentItems().then((result) => {
            setItem(result)
        })
    }, []);

    if (!items || items.length === 0) return <p>Нет данных.</p>
    return (
        <Box sx={{
            paddingTop: '50px',
            paddingLeft: '10px',
            paddingRight: '20px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '30px'
        }}>
            {items.map(item => (
                <Link style={{ textDecoration: 'none' }} to={`/item/${item._id}`}>
                    <RecentCardItem item={item}/>
                </Link>
            ))}
        </Box>
    );
}