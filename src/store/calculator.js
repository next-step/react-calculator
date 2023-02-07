import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
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

export const calculatorValue = (state) => state.calculator.value || '0';

export default calculatorSlice.reducer;