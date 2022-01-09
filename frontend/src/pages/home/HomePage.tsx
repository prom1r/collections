import React, {useState, useEffect} from 'react';
import { TopCollections } from './topCollectionsItems/TopCollections';
import {RecentItems} from "./topCollectionsItems/RecentItems";

export default function HomePage() {
    return (
        <div>
            <div>
                <TopCollections />
            </div>
            <div>
                <RecentItems items={[]} />
            </div>
        </div>
    );
}
