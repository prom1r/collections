import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

interface BooleanStringProps {
  name: string;
  value: string;
}

export const BooleanView: React.FC<BooleanStringProps> = (props) => {
  const result = props.value ? "Yes" : "No";
  return (
    <Grid container item spacing={3}>
      <Typography
        gutterBottom
        sx={{
          paddingLeft: "20px",
          fontSize: "20pt",
        }}
      >
        <strong>{props.name}</strong> {result}
      </Typography>
    </Grid>
  );
};
