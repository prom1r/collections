import React, { useEffect, useState } from "react";
import { CollectionHeader } from "./collectionComponents/CollectionHeader";
import { useParams } from "react-router-dom";
import { getMyCollectionsId } from "../../api/collectionService";
import { PageNotFound } from "../notFound/PageNotFound";

export const CollectionPage = () => {
    const { id } = useParams();
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        getMyCollectionsId(id).then((result) => {
            setCollection(result)
        })
    }, [])

    return (
        <div>
            <CollectionHeader collection={collection}/>
        </div>
    );

}
