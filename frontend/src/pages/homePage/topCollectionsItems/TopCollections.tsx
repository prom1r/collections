import React, { FC, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { getTopCollections } from "../../../api/collectionService";
import { CardCollection } from "../../../components/CardCollection";
import { Link } from "react-router-dom";

export const TopCollections = (props) => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    getTopCollections().then((result) => {
      setCollections(result);
    });
  }, []);
  if (!collections || collections.length === 0) return <p>Нет данных.</p>;
  return (
    <Box
      sx={{
        width: "0 auto",
        height: "100%",
        marginLeft: "10px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "flex-start",
        justifyContent: "space-between",
        gap: "30px",
      }}
    >
      {collections.map((item, index) => (
        <Box key={item._id}>
          <Link
            style={{ textDecoration: "none" }}
            to={`/collection/${item._id}`}
          >
            <CardCollection collection={item} />
          </Link>
        </Box>
      ))}
    </Box>
  );
};
