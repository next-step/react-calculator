import { useCallback, useMemo, useState } from 'react';
import { Calculator, Operator, Validator } from '../domain';
import { MESSAGE } from '../constants';

const initialState = '0';

const { symbols: OPERATOR_SYMBOLS } = Operator;

export default function useCalculator() {
	const [calculatorState, setState] = useState(initialState);

	const insertDigit = useCallback((digit: string) => {
		if (calculatorState === initialState) {
			setState(digit);
			return;
		}

		setState(calculatorState + digit);
	}, [calculatorState]);

	const insertOperation = useCallback((operator: string) => {
		if (calculatorState === initialState) {
			return;
		}

		setState(calculatorState + operator);
	}, [calculatorState]);

	const setAnswer = useCallback(() => {
		const operator = calculatorState.split('').find((item) => OPERATOR_SYMBOLS.includes(item));

		if (!Validator.isOverMaxDigitLength(calculatorState) || !operator) {
			return;
		}

		const [a, b] = calculatorState.split(operator).map((item) => Number(item));
		const item = new Calculator(
			operator,
			[a, b]
		);
		const result = item.execute();

		if (result === Infinity) {
			setState(MESSAGE.INFINITY);
			return;
		}

		setState(String(result));
	}, [calculatorState]);

	const resetCalculator = () => setState(initialState);

	return useMemo(() => ({
		insertDigit,
		insertOperation,
		setAnswer,
		resetCalculator,
		calculatorState,
	}), [calculatorState]);
}