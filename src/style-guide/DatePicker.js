import { memo } from 'react';

import { Grid, TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/lab';

const DatePicker = ({ value, label, onChange }) => {
  return (
    <Grid item xs={12}>
      <DesktopDatePicker
        minDate={new Date()}
        value={value}
        onChange={onChange}
        renderInput={params => <TextField {...params} size='small' fullWidth required label={label} />}
      />
    </Grid>
  );
};

DatePicker.defaultProps = {
  label: '',
  value: null,
};

export default memo(DatePicker);
