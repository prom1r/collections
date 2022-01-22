import React from 'react';
import { ContainerSearchItems } from "./ContainerSearchItems";
import { useSearchParams } from "react-router-dom";

export const SearchItemsPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('search')

    return (
        <>
            <h2>Search Results for {search}</h2>
            <ContainerSearchItems searchItems={search}/>
        </>
    );
}
