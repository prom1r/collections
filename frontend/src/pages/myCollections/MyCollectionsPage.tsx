import React from "react";
import { MyCollections } from "./myCollectionsItems/MyCollections";
import { Helmet } from "react-helmet";

export const MyCollectionsPage = () => {
  return (
    <>
      <Helmet>
        <title>My Collections</title>
      </Helmet>
      <MyCollections />
    </>
  );
};
