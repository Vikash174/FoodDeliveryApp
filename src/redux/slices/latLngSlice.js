import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  latLng: {}
};

const latLngSlice = createSlice({
  name: 'latLng',
  initialState,
  reducers: {
    updateLatLng: (state, action) => {
      state.latLng = action.payload;
    }
  }
});

export const { updateLatLng } = latLngSlice.actions;

export default latLngSlice.reducer;
