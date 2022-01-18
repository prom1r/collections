import React, {useState, useEffect} from 'react';
import { TopCollections } from './topCollectionsItems/TopCollections';
import {RecentItems} from "./topCollectionsItems/RecentItems";
import Box from '@mui/material/Box';

export default function HomePage() {
    return (
        <div>
            <div>
                <h2>Top Collections</h2>
                <TopCollections />
            </div>
            <Box sx={{
                paddingTop: '50px',
                paddingLeft: '10px',
                width:'100%'

            }}>
                <h2>Recent Items</h2>
                <RecentItems items={[]}/>
            </Box>

        </div>
    );
}
