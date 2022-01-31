import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextError } from "../TextError";

export const Textarea = (props) => {
  const { label, name, style, ...rest } = props;
  return (
    <div className={style}>
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};
