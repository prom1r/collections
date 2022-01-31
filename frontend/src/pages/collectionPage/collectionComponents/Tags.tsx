import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export const Tags = (props) => {
  return (
    <Stack
      sx={{
        width: "430px",
      }}
    >
      <Autocomplete
        sx={{
          paddingBottom: "20px",
        }}
        multiple
        id="tags-filled"
        size="medium"
        options={props.tags}
        defaultValue={props.formik.initialValues.tags}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              variant="outlined"
              label={option}
              {...getTagProps({ index })}
            />
          ))
        }
        onChange={(e, value) => {
          props.formik.setFieldValue("tags", value);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Tags"
            placeholder="add tags"
          />
        )}
      />
    </Stack>
  );
};
