import { Container, Grid } from '@mui/material';
import GetProducts from './components/GetProducts';
import AddProduct from 'components/AddProduct';

const App = () => {
  return (
    <Container maxWidth='xl'>
      <Grid container mt={2} spacing={2}>
        <AddProduct />
        <GetProducts />
      </Grid>
    </Container>
  );
};

export default App;
