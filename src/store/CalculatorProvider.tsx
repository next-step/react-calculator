import { ReactNode, useCallback, useMemo, useReducer } from 'react';
import { calculatorReducer, initialState } from '@/store/calculatorReducer';
import Validator from '@/core/Validator';
import { MESSAGE, OPERATOR } from '@/constants';
import Calculator from '@/domain/Calculator';
import { CalculatorContext } from '@/store/CalculatorContext';

export default function CalculatorProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(calculatorReducer, initialState);
	const calculatorState = useMemo(() => state, [state]);

	const insertDigits = useCallback((digits: string) => {
		const updateDigits = calculatorState + digits;

		if (!Validator.isOverMaxDigitLength(updateDigits)) {
			alert(MESSAGE.MAX_DIGIT_LENGTH);
			return;
		}

		dispatch({ type: 'insertDigits', payload: digits });
	}, [calculatorState]);

	const insertOperation = useCallback((operator: string) => {
		if (calculatorState === '0') {
			return;
		}

		if (Validator.isMaxOperatorLength(calculatorState + operator)) {
			alert(MESSAGE.MAX_OPERATOR_LENGTH);
			return;
		}

		dispatch({ type: 'insertOperation', payload: operator });
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

		dispatch({ type: 'setAnswer', payload: item.result() });
	}, [calculatorState]);

	const resetCalculator = () => dispatch({ type: 'resetCalculator' });

	return (
		<CalculatorContext.Provider
			value={{
				insertDigits,
				insertOperation,
				setAnswer,
				resetCalculator,
				state: calculatorState
			}}
		>
			{children}
		</CalculatorContext.Provider>
	);
}