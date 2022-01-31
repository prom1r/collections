import React, { useEffect, useState } from "react";
import { CollectionHeader } from "./collectionComponents/CollectionHeader";
import { useParams } from "react-router-dom";
import { getMyCollectionsId } from "../../api/collectionService";
import { CollectionItems } from "./collectionComponents/CollectionItems";
import { PageNotFound } from "../notFound/PageNotFound";
import { getMyItems } from "../../api/itemsService";
import Snackbar from "@mui/material/Snackbar";
import { Helmet } from "react-helmet";

export const CollectionPage = () => {
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [collection, setCollection] = useState(null);
  const [itemsCount, setItemsCount] = useState(null);
  let collectionId = id;
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const onClose = (value) => {
    setOpen(true);
    setCollection(value);
  };

  useEffect(() => {
    getMyCollectionsId(id).then((result) => {
      setCollection(result);
      setIsLoaded(true);
    });
    getMyItems(id).then((result) => {
      setItemsCount(result.length);
    });
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (isLoaded && !collection) {
    return <PageNotFound />;
  }
  return (
    <div>
      <Helmet>
        <title>Collections</title>
      </Helmet>
      <CollectionHeader
        collection={collection}
        itemsCount={itemsCount}
        onClose={onClose}
      />
      <CollectionItems
        collectionId={collectionId}
        collectionTitle={collection.title}
        customField={collection.customFields}
        userId={collection.userId}
      />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Your collection has been successfully edit!"
        key={"onCreate"}
      />
    </div>
  );
};
