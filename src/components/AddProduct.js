import { useState } from 'react';

import { Button, Grid, IconButton, InputAdornment } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { TextField, DatePicker } from 'style-guide';

const AddProduct = () => {
  const initialState = {
    name: '',
    price: '',
    weight: '',
    startDate: null,
    endDate: null,
  };

  const [state, setState] = useState(initialState);

  const onChangeHandler = (event, field) => {
    setState(prevState => ({ ...prevState, [field]: event.target.value }));
  };

  const onDateChangeHandler = (date, field) => {
    setState(prevState => ({ ...prevState, [field]: date }));
  };

  return (
    <Grid item container spacing={2}>
      <Grid item>
        <IconButton color='primary' size='small'>
          <AddIcon />
        </IconButton>
      </Grid>
      <TextField label='Name' value={state.name} onChange={event => onChangeHandler(event, 'name')} />
      <TextField
        type='number'
        label='Price'
        value={state.price}
        onChange={event => onChangeHandler(event, 'price')}
        endAdornment={<InputAdornment position='end'>$</InputAdornment>}
      />
      <TextField
        type='number'
        label='Weight'
        value={state.weight}
        onChange={event => onChangeHandler(event, 'weight')}
        endAdornment={<InputAdornment position='end'>kg</InputAdornment>}
      />
      <DatePicker
        label='Start date'
        value={state.startDate}
        onChange={date => onDateChangeHandler(date, 'startDate')}
      />
      <DatePicker label='End date' value={state.endDate} onChange={date => onDateChangeHandler(date, 'endDate')} />
      <Grid container item justifyContent='flex-end' xs={12} sm={6} md={4} lg={2}>
        <Button variant='contained' sx={{ mr: 2 }}>
          Save
        </Button>
        <Button variant='contained' color='secondary'>
          Cancel
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddProduct;
