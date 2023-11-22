import { createSlice } from '@reduxjs/toolkit';

const latLngSlice = createSlice({
  name: 'latLng',
  initialState: {
    lat: '',
    lng: ''
  },
  reducers: {
    updateLatLng: (state, action) => {
      state.lat = action.payload;
      state.lng = action.payload;
    }
  }
});

export const { updateLatLng } = latLngSlice.actions;

export default latLngSlice.reducer;
