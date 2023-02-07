import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
	value: string;
}

const initialState: CalculatorState = {
	value: '0',
};

export const calculatorSlice = createSlice({
	name: 'calculator',
	initialState,
	reducers: {
		insertDigits: (state, action: PayloadAction<string>) => {
			if (state.value === initialState.value) {
				state.value = action.payload;
				return;
			}

			state.value += action.payload;
		},
		insertOperation: (state, action: PayloadAction<string>) => {
			state.value += action.payload;
		},
		updateAnswer: (state, action: PayloadAction<number>) => {
			state.value = String(action.payload);
		},
		resetCalculator: (state) => {
			state.value = initialState.value;
		}
	}
});

export const { insertDigits, resetCalculator, insertOperation, updateAnswer } = calculatorSlice.actions;

export const calculatorValue = (state) => state.calculator.value;

export default calculatorSlice.reducer;