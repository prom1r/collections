import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { format, compareAsc } from "date-fns";

interface DateStringProps {
  name: string;
  value: string;
}

export const DateView: React.FC<DateStringProps> = (props) => {
  let resultDate;

  if (!props.value) {
    const date = new Date();
    resultDate = format(new Date(date), "MM-dd-yyyy");
  } else {
    const date = new Date(props.value);
    resultDate = format(new Date(date), "MM-dd-yyyy");
  }

  return (
    <Grid container item spacing={3}>
      <Typography
        gutterBottom
        sx={{
          paddingLeft: "20px",
          fontSize: "20pt",
        }}
      >
        <strong> {props.name}</strong> {resultDate}
      </Typography>
    </Grid>
  );
};
