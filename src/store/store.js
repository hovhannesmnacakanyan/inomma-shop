import { configureStore } from '@reduxjs/toolkit';

import productsReducer from 'reducers/productsSlicer';

export default configureStore({
  reducer: { products: productsReducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});
