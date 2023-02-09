import { useCallback, useMemo, useState } from 'react';
import { Calculator, Operator, Validator } from '../domain';
import { MESSAGE } from '../constants';

const initialState = '0';

const { symbols: OPERATOR_SYMBOLS, MAX_OPERATOR_LENGTH } = Operator;
const { MAX_DIGIT_LENGTH } = Calculator;

export default function useCalculator() {
	const [calculatorState, setState] = useState(initialState);

	const insertDigits = useCallback((digits: string) => {
		const updateDigits = calculatorState + digits;

		if (!Validator.isOverMaxDigitLength(updateDigits)) {
			alert(MESSAGE.MAX_DIGIT_LENGTH(MAX_DIGIT_LENGTH));
			return;
		}

		if (calculatorState === initialState) {
			setState(digits);
			return;
		}

		setState(calculatorState + digits);
	}, [calculatorState]);

	const insertOperation = useCallback((operator: string) => {
		if (calculatorState === initialState) {
			return;
		}

		if (Validator.isMaxOperatorLength(calculatorState + operator)) {
			alert(MESSAGE.MAX_OPERATOR_LENGTH(MAX_OPERATOR_LENGTH));
			return;
		}

		setState(calculatorState + operator);
	}, [calculatorState]);

	const setAnswer = useCallback(() => {
		const getOperator = calculatorState.split('').find((item) => OPERATOR_SYMBOLS.includes(item));

		if (!Validator.isOverMaxDigitLength(calculatorState) || !getOperator) {
			return;
		}

		const [a, b] = calculatorState.split(getOperator).map((item) => Number(item));
		const item = new Calculator(
			getOperator,
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
		insertDigits,
		insertOperation,
		setAnswer,
		resetCalculator,
		calculatorState,
	}), [calculatorState]);
}