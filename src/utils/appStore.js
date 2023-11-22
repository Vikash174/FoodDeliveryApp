import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import latLngReducer from './latLngSlice';
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    latLng: latLngReducer
  }
});

export default appStore;
