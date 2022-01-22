import { v4 as uuidv4 } from 'uuid';

import { Divider, Grid, IconButton, InputAdornment } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { TextField, DatePicker } from 'style-guide';

import { useDispatch, useSelector } from 'react-redux';
import {
  onAddProduct,
  onEndDateChange,
  onNameChange,
  onPriceChange,
  onStartDateChange,
  onStateRefresh,
  onWeightChange,
} from 'reducers/productsSlicer';

const AddProduct = () => {
  const dispatch = useDispatch();
  const { name, price, weight, startDate, endDate, currentProducts } = useSelector(state => state.products);

  const onAddHandler = () => {
    dispatch(
      onAddProduct({
        id: uuidv4(),
        name,
        price,
        weight,
        startDate,
        endDate,
      }),
    );
    dispatch(onStateRefresh());
  };

  return (
    <Grid container item spacing={2} sx={{ maxHeight: 500, overflowY: 'scroll' }}>
      <Grid item container spacing={2} pb={3} pr={2}>
        <Grid item xs={0.5}>
          <IconButton onClick={onAddHandler} color='primary' size='small'>
            <AddIcon />
          </IconButton>
        </Grid>
        <TextField label='Name' value={name} onChange={event => dispatch(onNameChange(event))} />
        <TextField
          type='number'
          label='Price'
          value={price}
          onChange={event => dispatch(onPriceChange(event))}
          endAdornment={<InputAdornment position='end'>$</InputAdornment>}
        />
        <TextField
          type='number'
          label='Weight'
          value={weight}
          onChange={event => dispatch(onWeightChange(event))}
          endAdornment={<InputAdornment position='end'>kg</InputAdornment>}
        />
        <DatePicker label='Start date' value={startDate} onChange={date => dispatch(onStartDateChange(date))} />
        <DatePicker label='End date' value={endDate} onChange={date => dispatch(onEndDateChange(date))} />
        <Grid item xs={12}>
          <Divider />
        </Grid>
        {currentProducts.map(product => {
          return (
            <Grid item container spacing={2}>
              <TextField label='Name' value={product.name} onChange={event => dispatch(onNameChange(event))} />
              <TextField
                type='number'
                label='Price'
                value={product.price}
                onChange={event => dispatch(onPriceChange(event))}
                endAdornment={<InputAdornment position='end'>$</InputAdornment>}
              />
              <TextField
                type='number'
                label='Weight'
                value={product.weight}
                onChange={event => dispatch(onWeightChange(event))}
                endAdornment={<InputAdornment position='end'>kg</InputAdornment>}
              />
              <DatePicker
                label='Start date'
                value={product.startDate}
                onChange={date => dispatch(onStartDateChange(date))}
              />
              <DatePicker label='End date' value={product.endDate} onChange={date => dispatch(onEndDateChange(date))} />
              <Grid item xs={12}>
                <Divider />
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default AddProduct;
