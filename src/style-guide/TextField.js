import { memo } from 'react';

import { Grid, TextField } from '@mui/material';

const TextFieldWrapper = ({ label, value, onChange, type, endAdornment }) => {
  let inputProps = null;

  if (type === 'number') {
    inputProps = { inputProps: { min: 0 } };
  }

  return (
    <Grid item xs={12}>
      <TextField
        InputProps={{
          ...inputProps,
          endAdornment,
        }}
        required
        fullWidth
        size='small'
        type={type}
        label={label}
        value={value}
        onChange={onChange}
      />
    </Grid>
  );
};

TextFieldWrapper.defaultProps = {
  label: '',
  value: '',
  type: 'text',
  endAdornment: null,
};

export default memo(TextFieldWrapper);
