import { MESSAGE } from '@/constants';

export const initialState = '0';

type ActionType =
	| {
	type: 'insertDigits';
	payload: string;
} | {
	type: 'insertOperation';
	payload: string;
} | {
	type: 'setAnswer';
	payload: number;
} | {
	type: 'resetCalculator';
}

export function calculatorReducer(
	state,
	action: ActionType
) {
	switch (action.type) {
		case 'insertDigits':
			if (state === initialState) {
				return action.payload;
			}

			return state += action.payload;
		case 'insertOperation':
			return state += action.payload;
		case 'setAnswer':
			if (action.payload === Infinity) {
				return MESSAGE.INFINITY;
			}

			return String(action.payload);
		case 'resetCalculator':
			return initialState;
		default:
			throw new Error(MESSAGE.NOT_FOUND_ACTION);
	}
}