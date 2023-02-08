import { useCallback, useMemo, useState } from 'react';
import Validator from '../../core/Validator';
import { MESSAGE, OPERATOR } from '../../constants';
import Calculator from '../../domain/Calculator';

const initialState = '0';

export default function useCalculator() {
	const [calculatorState, setState] = useState(initialState);

	const insertDigits = useCallback((digits: string) => {
		const updateDigits = calculatorState + digits;

		if (!Validator.isOverMaxDigitLength(updateDigits)) {
			alert(MESSAGE.MAX_DIGIT_LENGTH);
			return;
		}

		if (calculatorState === initialState) {
			return;
		}

		setState(calculatorState + digits);
	}, [calculatorState]);

	const insertOperation = useCallback((operator: string) => {
		if (calculatorState === initialState) {
			return;
		}

		if (Validator.isMaxOperatorLength(calculatorState + operator)) {
			alert(MESSAGE.MAX_OPERATOR_LENGTH);
			return;
		}

		setState(calculatorState + operator);
	}, [calculatorState]);

	const setAnswer = useCallback(() => {
		const getOperator = calculatorState.split('').find((item) => OPERATOR.includes(item));

		if (!Validator.isOverMaxDigitLength(calculatorState) || !getOperator) {
			return;
		}

		const item = new Calculator(
			getOperator,
			calculatorState.split(getOperator).map((item) => Number(item))
		);
		const result = item.result();

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