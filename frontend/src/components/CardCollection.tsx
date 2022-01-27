import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Collection } from "../models/collections";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Popover from "@mui/material/Popover";

interface CardCollectionProps {
  collection: Collection;
}

export const CardCollection: FC<CardCollectionProps> = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { _id, title, srcImg, category } = props.collection;

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          boxShadow: 10,
          minWidth: 200,
        }}
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <CardMedia component="img" alt={title} height="140" image={srcImg} />
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            paddingTop: "10px",
          }}
        >
          {title}
        </Typography>
      </Card>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>15 Items.</Typography>
      </Popover>
    </>
  );
};
