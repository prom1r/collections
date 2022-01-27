import React from "react";
import { ContainerSearchItems } from "./ContainerSearchItems";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";

export const SearchItemsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
  const tag = searchParams.get("tag");

  return (
    <>
      <Helmet>
        <title>Search Item</title>
      </Helmet>
      <h2>Search Results for {search}</h2>
      <ContainerSearchItems searchItems={search} searchItemsInTag={tag} />
    </>
  );
};
