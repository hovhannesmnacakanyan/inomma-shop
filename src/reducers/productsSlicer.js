import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    onAddProduct: (state, { payload }) => {
      state.products.push(payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { onAddProduct } = productsSlice.actions;

export default productsSlice.reducer;
