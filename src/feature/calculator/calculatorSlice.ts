import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
	value: string;
}

const initialState: CalculatorState = {
	value: '',
};

export const calculatorSlice = createSlice({
	name: 'calculator',
	initialState,
	reducers: {
		insertDigits: (state, action: PayloadAction<string>) => {
			state.value += action.payload;
		}
	}
});

export const { insertDigits } = calculatorSlice.actions;

export const calculatorValue = (state) => state.calculator.value || '0';

export default calculatorSlice.reducer;