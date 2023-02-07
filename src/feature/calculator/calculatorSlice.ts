import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MESSAGE } from '@/constants';

export interface CalculatorState {
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
		setAnswer: (state, action: PayloadAction<number>) => {
			if (action.payload === Infinity) {
				state.value = MESSAGE.INFINITY;
				return;
			}

			state.value = String(action.payload);
		},
		resetCalculator: (state) => {
			state.value = initialState.value;
		}
	}
});

export const { insertDigits, resetCalculator, insertOperation, setAnswer } = calculatorSlice.actions;

export const calculatorValue = (state) => state.calculator.value;

export default calculatorSlice.reducer;