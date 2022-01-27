import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ReactMarkdown from "react-markdown";

interface TextAreaStringProps {
  name: string;
  value: string;
}

export const TextAreaView: React.FC<TextAreaStringProps> = (props) => {
  return (
    <Grid container item spacing={3}>
      <Typography
        gutterBottom
        sx={{
          paddingLeft: "20px",
          fontSize: "20pt",
          textAlign: "left",
        }}
      >
        <strong>{props.name}</strong>{" "}
        <ReactMarkdown>{props.value}</ReactMarkdown>
      </Typography>
    </Grid>
  );
};
