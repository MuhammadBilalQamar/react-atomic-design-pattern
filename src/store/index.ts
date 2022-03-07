import { configureStore } from '@reduxjs/toolkit';

// reducers
import rootSlice from './slices';

const store = configureStore({
  reducer: { ...rootSlice },
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
