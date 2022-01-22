import { memo } from 'react';

import { Grid, TextField } from '@mui/material';
import { MobileDatePicker } from '@mui/lab';

const DatePicker = ({ value, label, onChange, required, xs, sm, md, lg }) => {
  return (
    <Grid item xs={xs} sm={sm} md={md} lg={lg}>
      <MobileDatePicker
        minDate={new Date()}
        value={value}
        onChange={onChange}
        label={label}
        required={required}
        renderInput={params => <TextField {...params} size='small' fullWidth />}
      />
    </Grid>
  );
};

DatePicker.defaultProps = {
  label: '',
  value: null,
  required: null,
  xs: 12,
  sm: 6,
  md: 4,
  lg: 2,
};

export default memo(DatePicker);
