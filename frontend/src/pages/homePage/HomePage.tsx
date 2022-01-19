import React, { useState, useEffect } from 'react';
import { TopCollections } from './topCollectionsItems/TopCollections';
import { RecentItems } from "./topCollectionsItems/RecentItems";
import Box from '@mui/material/Box';

export default function HomePage() {
    return (
        <div>
            <Box sx={{
                paddingTop: '20px',
                paddingLeft: '10px',
                paddingBottom: '50px',
                width: '100%',
                height: 'auto'

            }}>
                <h2>Top Collections</h2>
                <TopCollections/>
            </Box>
            <Box sx={{
                paddingTop: '10px',
                paddingLeft: '10px',
                width: '100%',
                height: 'auto',
                paddingBottom: '50px',
            }}>
                <h2>Recent Items</h2>
                <RecentItems/>
            </Box>

        </div>
    );
}
