import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export const Tags = (props) => {

    return (
        <Autocomplete sx={{
            paddingTop: '20px',
            paddingBottom: '20px',
        }}
                      multiple
                      id="tags"
                      size="medium"
                      options={props.tags}
                      freeSolo
                      renderTags={(value, getTagProps) =>
                          value.map((option, index) => (
                              <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                          ))
                      }
                      onChange={(e, value) => {
                          props.formik.setFieldValue(
                              "tags", value);
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
    );
}
