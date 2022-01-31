import React, { FC } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";

interface TextareaFormProps {
  index: number;
  name: string;
  formik: any;
  values: string;
}

export const TextareaForm: React.FC<TextareaFormProps> = (props) => {
  return (
    <TextareaAutosize
      name={`customField.${props.index}.value`}
      value={props.values}
      id={props.name}
      onChange={props.formik.handleChange}
      aria-label="empty textarea"
      placeholder="supports markdown"
      style={{ width: "20em" }}
    />
  );
};
