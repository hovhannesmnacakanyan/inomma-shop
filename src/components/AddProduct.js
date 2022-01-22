import { Fragment, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Button, Divider, Grid, InputAdornment } from '@mui/material';
import { TextField, DatePicker } from 'style-guide';

import { useDispatch } from 'react-redux';
import { onAddProduct } from 'reducers/productsSlicer';

const validationSchema = Yup.array().of(
  Yup.object().shape({
    name: Yup.string().required('Name is required'),
    price: Yup.number().typeError('Must be a number').required('Price is required'),
    weight: Yup.number().typeError('Must be a number').required('Weight is required'),
    startDate: Yup.date().typeError('Must be a valid date'),
    endDate: Yup.date().typeError('Must be a valid date'),
  }),
);

const initialValue = {
  id: uuidv4(),
  name: '',
  price: '',
  weight: '',
  startDate: null,
  endDate: null,
};

const AddProduct = () => {
  const dispatch = useDispatch();

  const onResetHandler = () => {
    resetForm();
  };

  const onSaveHandler = () => {
    dispatch(onAddProduct(values));
    onResetHandler();
  };

  const { errors, values, handleSubmit, resetForm, setValues } = useFormik({
    initialValues: [initialValue],
    validationSchema,
    validateOnBlur: false,
    onSubmit: () => onSaveHandler(),
  });

  const onAddHandler = () => {
    setValues([...values, { ...initialValue, id: uuidv4() }]);
  };

  const onChangeHandler = (value, index) => {
    values[index] = { ...values[index], ...value };
    setValues([...values]);
  };

  const onRemoveHandler = id => {
    setValues(values.filter(item => item.id !== id));
  };

  const currentProducts = useMemo(() => values, [values]);

  return (
    <Grid container item xs={12} md={4} spacing={2} sx={{ maxHeight: 500, overflowY: 'scroll' }}>
      <Grid component='form' onSubmit={handleSubmit} item container spacing={2} pb={3} pr={2}>
        {currentProducts.map((product, index) => {
          return (
            <Fragment key={product.id}>
              <TextField
                label='Name'
                value={product.name}
                onChange={event => onChangeHandler({ name: event.target.value }, index)}
                error={errors[index] && !!errors[index].name}
                helperText={errors[index] && errors[index].name}
              />
              <TextField
                type='number'
                label='Price'
                value={product.price}
                onChange={event => onChangeHandler({ price: event.target.value }, index)}
                endAdornment={<InputAdornment position='end'>$</InputAdornment>}
                error={errors[index] && !!errors[index].price}
                helperText={errors[index] && errors[index].price}
              />
              <TextField
                type='number'
                label='Weight'
                value={product.weight}
                onChange={event => onChangeHandler({ weight: event.target.value }, index)}
                endAdornment={<InputAdornment position='end'>kg</InputAdornment>}
                error={errors[index] && !!errors[index].weight}
                helperText={errors[index] && errors[index].weight}
              />
              <DatePicker
                label='Start date'
                value={product.startDate}
                onChange={date => onChangeHandler({ startDate: date }, index)}
                error={errors[index] && !!errors[index].startDate}
                helperText={errors[index] && errors[index].startDate}
              />
              <DatePicker
                label='End date'
                minDate={product.startDate || new Date()}
                value={product.endDate}
                onChange={date => onChangeHandler({ endDate: date }, index)}
                error={errors[index] && !!errors[index].endDate}
                helperText={errors[index] && errors[index].endDate}
              />
              <Grid item xs={12}>
                <Button
                  fullWidth
                  onClick={() => onRemoveHandler(product.id)}
                  variant='outlined'
                  color='error'
                  disabled={currentProducts.length <= 1}>
                  Remove product
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
            </Fragment>
          );
        })}
        <Grid item xs={12}>
          <Button fullWidth onClick={onAddHandler} variant='outlined' color='primary'>
            Add product
          </Button>
        </Grid>
        <Grid container item justifyContent='flex-end' xs={12}>
          <Button variant='contained' type='submit' sx={{ mr: 2 }}>
            Save
          </Button>
          <Button variant='contained' color='error' onClick={onResetHandler}>
            Remove all
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddProduct;
