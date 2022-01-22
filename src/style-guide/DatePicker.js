import { memo } from 'react';

import { Grid, TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/lab';

const DatePicker = ({ value, label, onChange, error, helperText, minDate }) => {
  return (
    <Grid item xs={12}>
      <DesktopDatePicker
        minDate={minDate}
        value={value}
        onChange={onChange}
        renderInput={params => (
          <TextField {...params} size='small' fullWidth required label={label} error={error} helperText={helperText} />
        )}
      />
    </Grid>
  );
};

DatePicker.defaultProps = {
  label: '',
  value: null,
  error: null,
  helperText: null,
  minDate: new Date(),
};

export default memo(DatePicker);
