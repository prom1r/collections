import React, { useEffect, useState } from "react";
import { CollectionHeader } from "./collectionComponents/CollectionHeader";
import { useParams } from "react-router-dom";
import { getMyCollectionsId } from "../../api/collectionService";
import { CollectionItems } from "./collectionComponents/CollectionItems";
import { PageNotFound } from "../notFound/PageNotFound";
import { getMyItems } from "../../api/itemsService";


export const CollectionPage = () => {
    const { id } = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const [collection, setCollection] = useState(null);
    const [itemsCount,setItemsCount] = useState(null);
    let collectionId = id;


    useEffect(() => {
        getMyCollectionsId(id).then((result) => {
            setCollection(result);
            setIsLoaded(true);

        });
        getMyItems(id).then((result) => {
            setItemsCount(result.length)
        })

    }, [])


    if (!isLoaded) {
        return <div>Loading...</div>;
    }
    if (isLoaded && !collection) {
        return <PageNotFound/>
    }

    return (
        <div>
            <CollectionHeader collection={collection} itemsCount={itemsCount}/>
            <CollectionItems collectionId={collectionId}
                             collectionTitle={collection.title}
                            customField={collection.customFields}/>
        </div>
    );

}
