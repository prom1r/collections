import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export const ChipTag = (props) => {
  const color = ["primary", "secondary", "error", "success", "info", "warning"];
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
  const randomNum = getRandomInt(color.length);
  const randomColor: any = color[randomNum];
  return (
    <Stack
      spacing={2}
      alignItems="center"
      sx={{
        paddingRight: "10px",
      }}
    >
      <Stack direction="row" spacing={1}>
        <Chip label={props.tag} color={randomColor} />
      </Stack>
    </Stack>
  );
};
