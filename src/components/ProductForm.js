import { Grid, Button } from '@mui/material';
import AddProduct from 'components/AddProduct';

const ProductForm = () => {
  return (
    <Grid component='form' container item xs={12} lg={4} spacing={2}>
      <AddProduct />
      <Grid container item justifyContent='flex-end' xs={12}>
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

export default ProductForm;
