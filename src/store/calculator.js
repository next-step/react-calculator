import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    insertDigit: (state, action) => {
      if (state.value === 0) {
        state.value = action.payload;
        return;
      }

      state.value += action.payload;
    }
  }
});

export const { insertDigit } = calculatorSlice.actions;

export default calculatorSlice.reducer;