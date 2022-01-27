import React, { FC, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { getTopCollections } from "../../../api/collectionService";
import Stack from "@mui/material/Stack";
import { CardCollection } from "../../../components/CardCollection";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { TagsContainer } from "./Tagcloud";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "250px",
  boxShadow: "0px 0px 0px 0px",
}));

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
        backgroundColor: "grow",
        marginLeft: "10px",
        marginTop: "30px",

        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "flex-start",
        justifyContent: "space-between",
        gap: "30px",
      }}
    >
      {/*<Stack direction="row" spacing={2}>*/}
      {collections.map((item, index) => (
        <Item key={index}>
          <Link
            style={{ textDecoration: "none" }}
            to={`/collection/${item._id}`}
          >
            <CardCollection collection={item} />
          </Link>
        </Item>
      ))}
      {/*</Stack>*/}
    </Box>
  );
};
