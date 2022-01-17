import React, {useState,FC} from 'react';
import Checkbox from '@mui/material/Checkbox';

interface CheckboxFormProps {
  setValues: any;
  index: number;
}

export const CheckboxForm:React.FC<CheckboxFormProps> = (props) => {
  const [checked, setChecked] = useState(true);
  props.setValues(props.index, checked)

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}