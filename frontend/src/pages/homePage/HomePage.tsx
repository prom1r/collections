import React from "react";
import { TopCollections } from "./topCollectionsItems/TopCollections";
import { RecentItems } from "./topCollectionsItems/RecentItems";
import Box from "@mui/material/Box";
import { Helmet } from "react-helmet";

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Collections</title>
      </Helmet>
      <Box
        sx={{
          paddingTop: "20px",
          paddingLeft: "10px",
          paddingBottom: "50px",
          width: "100%",
          height: "auto",
        }}
      >
        <h2 style={{ marginBottom: "10px" }}>Top Collections</h2>
        <TopCollections />
      </Box>
      <Box
        sx={{
          paddingTop: "10px",
          paddingLeft: "10px",
          width: "100%",
          height: "auto",
          paddingBottom: "50px",
        }}
      >
        <h2 style={{ marginBottom: "10px" }}>Recent Items</h2>
        <RecentItems />
      </Box>
    </div>
  );
}
