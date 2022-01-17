import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageNotFound } from "../notFound/PageNotFound";
import { ItemInfo } from "./ItemInfo";
import { getMyItemId } from "../../api/itemsService";


export const ItemPage = () => {
    const { id } = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState(null);
    useEffect(() => {
        getMyItemId(id).then((result) => {
            setItem(result)
            setIsLoaded(true);
        })
    }, [])

    if (!isLoaded) {
        return <div>Loading...</div>;
    }
    if (isLoaded && !item) {
        return <PageNotFound/>
    }
    return (
        <div>
            <ItemInfo item={item}/>
        </div>
    );

}
