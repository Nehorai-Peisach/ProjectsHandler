import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setProjects } = counterSlice.actions;

export default counterSlice.reducer;
