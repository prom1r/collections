import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

export const ChipTag = (props) => {
  let navigate = useNavigate();
  const color = ["primary", "secondary", "error", "success", "info", "warning"];
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
  const randomNum = getRandomInt(color.length);
  const randomColor: any = color[randomNum];

  const handleClick = () => {
    navigate(`/results/items?tag=${props.tag}`);
  };
  return (
    <Stack
      spacing={2}
      alignItems="center"
      sx={{
        paddingRight: "10px",
      }}
    >
      <Stack direction="row" spacing={1}>
        <Chip
          onClick={handleClick}
          label={props.tag}
          color={randomColor}
          sx={{
            cursor: "pointer",
          }}
        />
      </Stack>
    </Stack>
  );
};
