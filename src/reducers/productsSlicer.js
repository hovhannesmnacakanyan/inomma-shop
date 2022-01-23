import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    totalWeight: 0,
    products: [],
  },
  reducers: {
    onAddProduct: (state, { payload }) => {
      state.products = [...state.products, ...payload];
      state.totalWeight = state.products.reduce((acc, product) => {
        return acc + +product.weight;
      }, 0);
    },
  },
});

// Action creators are generated for each case reducer function
export const { onAddProduct } = productsSlice.actions;

export default productsSlice.reducer;
