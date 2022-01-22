import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

const GetProducts = () => {
  const { products } = useSelector(state => state.products);
  return (
    <Grid container item xs={12} md={8}>
      <p>{products.length}</p>
    </Grid>
  );
};

export default GetProducts;
