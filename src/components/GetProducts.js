import { useEffect, useState } from 'react';

import { Button, Grid, Paper, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { getRandomProductsList } from './../helpers/helpers';

const GetProducts = () => {
  const { products, totalWeight } = useSelector(state => state.products);
  const [randomProducts, setRandomProducts] = useState(null);

  useEffect(() => {
    if (products.length > 4) {
      setRandomProducts(getRandomProductsList(products, totalWeight));
    }
  }, [products, totalWeight]);

  const onItemRefreshHandler = () => {
    setRandomProducts(getRandomProductsList(products, totalWeight));
  };

  return randomProducts ? (
    <Grid container item xs={12} md={8} lg={9} spacing={2} alignContent='center'>
      {randomProducts.map((product, index) => {
        return (
          <Grid key={product.id || index} item xs={12} sm={6} lg={2.4}>
            <Paper elevation={4} sx={{ p: 2 }}>
              <Typography variant='h4'>{product.name}</Typography>
              <Typography variant='subtitle2' noWrap>
                Price: {product.price} $
              </Typography>
              <Typography variant='subtitle2' noWrap>
                Weight: {product.weight} kg
              </Typography>
              <Typography variant='subtitle2' noWrap>
                Probability: {product.probability} %
              </Typography>
            </Paper>
          </Grid>
        );
      })}
      <Grid item xs={12}>
        <Button variant='outlined' onClick={onItemRefreshHandler}>
          Refresh list
        </Button>
      </Grid>
    </Grid>
  ) : (
    <Grid container item xs={12} md={9} alignItems='center'>
      <Typography variant='h4'>Please add {5 - products.length} more item(s) to show probability. :)</Typography>
    </Grid>
  );
};

export default GetProducts;
