import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slices/cartSlice';
import latLngReducer from '../slices/latLngSlice';
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    latLng: latLngReducer
  }
});

export default appStore;
