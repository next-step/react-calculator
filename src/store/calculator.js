import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {}
});

export default calculatorSlice.reducer;