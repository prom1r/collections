import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { CardCollection } from "../../../components/CardCollection";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { getMyCollections } from "../../../api/collectionService";
import { NewCardCollection } from "./NewCardCollections";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { PageNotFound } from "../../notFound/PageNotFound";
import { Helmet } from "react-helmet";

export const MyCollections = (props) => {
  const [myCollections, setMyCollections] = useState([]);
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const handleCreate = (newCollection) => {
    myCollections.splice(0, 0, newCollection);
    const newMyCollections = myCollections.slice();
    setMyCollections(newMyCollections);
    setOpen(true);
  };

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }
    (async () => {
      try {
        const token = await getAccessTokenSilently();
        getMyCollections(token).then((result) => {
          setMyCollections(result);
        });
      } catch (e) {
        console.error(e);
      }
    })();
  }, [isAuthenticated, getAccessTokenSilently]);

  if (!myCollections) {
    return <CircularProgress />;
  }

  if (!user) {
    return <PageNotFound />;
  } else {
    return (
      <Box
        sx={{
          paddingTop: "50px",
          paddingLeft: "10px",
          width: "auto",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        <Helmet>
          <title>My Collections</title>
        </Helmet>
        {myCollections.map((item) => (
          <Box key={item._id}>
            <Link
              style={{ textDecoration: "none" }}
              to={`/collection/${item._id}`}
            >
              <CardCollection collection={item} />
            </Link>
          </Box>
        ))}

        <NewCardCollection onCreate={handleCreate} />

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message="Your collection has been successfully added!"
          key={"onCreate"}
        />
      </Box>
    );
  }
};
