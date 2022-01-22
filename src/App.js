import { Container, Grid } from '@mui/material';
import AddProduct from 'components/AddProduct';

const App = () => {
  return (
    <Container maxWidth='xl'>
      <Grid container mt={2} spacing={2}>
        <AddProduct />
      </Grid>
    </Container>
  );
};

export default App;
