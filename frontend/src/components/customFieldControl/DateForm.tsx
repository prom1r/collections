import React, { useState, FC } from "react";
import Box from "@mui/material/Box";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DatePicker";

interface DateFormProps {
  index: number;
  name: string;
  formik: any;
  values: any;
}

export const DateForm: React.FC<DateFormProps> = (props) => {
  const field = `customField.${props.index}.value`;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="Custom input"
        value={props.values}
        onChange={(date) => props.formik.setFieldValue(field, date)}
        renderInput={({ inputRef, inputProps, InputProps }) => (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <input ref={inputRef} {...inputProps} />
            {InputProps?.endAdornment}
          </Box>
        )}
      />
    </LocalizationProvider>
  );
};
