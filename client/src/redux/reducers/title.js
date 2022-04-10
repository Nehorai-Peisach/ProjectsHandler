import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: "Home",
};

export const counterSlice = createSlice({
  name: 'title',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setTitle } = counterSlice.actions;

export default counterSlice.reducer;
