import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { getRecentItems } from "../../../api/itemsService";
import { RecentCardItem } from "../../../components/RecentCardItem";
import { Link } from "react-router-dom";

export const RecentItems = () => {
    const [items, setItem] = useState([])
    useEffect(() => {
        getRecentItems().then((result) => {
            setItem(result)
        })
    }, []);

    if (!items || items.length === 0) return <p>Нет данных.</p>
    return (
        <Box sx={{
            paddingTop: '20px',
            paddingLeft: '10px',
            paddingRight: '20px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '30px',
        }}>
            {items.map((item, index) => (
                <Box key={index}>
                    <Link style={{ textDecoration: 'none' }} to={`/item/${item._id}`}>
                        <RecentCardItem item={item}/>
                    </Link>
                </Box>
            ))}
        </Box>
    );
}