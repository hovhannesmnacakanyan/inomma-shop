import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    name: '',
    price: '',
    weight: '',
    startDate: null,
    endDate: null,
    currentProducts: [],
    allProducts: [],
  },
  reducers: {
    onAddProduct: (state, { payload }) => {
      state.currentProducts.push(payload);
    },
    onStateRefresh: state => {
      state.name = '';
      state.price = '';
      state.weight = '';
      state.startDate = null;
      state.endDate = null;
    },
    onNameChange: (state, { payload }) => {
      state.name = payload.target.value;
    },
    onPriceChange: (state, { payload }) => {
      state.price = payload.target.value;
    },
    onWeightChange: (state, { payload }) => {
      state.weight = payload.target.value;
    },
    onStartDateChange: (state, { payload }) => {
      state.startDate = payload;
    },
    onEndDateChange: (state, { payload }) => {
      state.endDate = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onAddProduct,
  onNameChange,
  onPriceChange,
  onWeightChange,
  onStartDateChange,
  onEndDateChange,
  onStateRefresh,
} = productsSlice.actions;

export default productsSlice.reducer;
