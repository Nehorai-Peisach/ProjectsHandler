import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null,
};

export const counterSlice = createSlice({
  name: 'currentProject',
  initialState,
  reducers: {
    setCurrentProject: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentProject } = counterSlice.actions;

export default counterSlice.reducer;
