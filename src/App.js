import { Container, Grid } from '@mui/material';
import ProductForm from 'components/ProductForm';
import GetProducts from './components/GetProducts';

const App = () => {
  return (
    <Container maxWidth='xl'>
      <Grid container mt={2} spacing={2}>
        <ProductForm />
        <GetProducts />
      </Grid>
    </Container>
  );
};

export default App;
