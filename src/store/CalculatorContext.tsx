import { createContext, ReactNode, useReducer } from 'react';
import { calculatorReducer, initialState } from './calculatorReducer';
import Validator from '@/core/Validator';
import { MESSAGE, OPERATOR } from '@/constants';
import Calculator from '@/domain/Calculator';

interface ContextType {
	insertDigits: (digit: string) => void;
	insertOperation: (operation: string) => void;
	setAnswer: () => void;
	resetCalculator: () => void;
	state: string;
}

export const CalculatorContext = createContext<ContextType>({
	insertDigits: () => {
		// 계산기에 숫자 추가 (최대 3글자)
	},
	insertOperation: () => {
		// 계산기에 연산자 추가 (최대 1개)
	},
	setAnswer: () => {
		// 누적된 값을 바탕으로 계산 시작
	},
	resetCalculator: () => {
		// 계산기 초기값으로 재설정
	},
	state: '0'
});

export default function CalculatorProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(calculatorReducer, initialState);

	const insertDigits = (digits) => {
		const updateDigits = state + digits;

		if (!Validator.isOverMaxDigitLength(updateDigits)) {
			alert(MESSAGE.MAX_DIGIT_LENGTH);
			return;
		}

		dispatch({ type: 'insertDigits', payload: digits });
	};

	const insertOperation = (operator) => {
		if (state === '0') {
			return;
		}

		const isMaxOperatorLength = Validator.isMaxOperatorLength(state + operator);

		if (isMaxOperatorLength) {
			alert(MESSAGE.MAX_OPERATOR_LENGTH);
			return;
		}

		dispatch({ type: 'insertOperation', payload: operator });
	};

	const setAnswer = () => {
		const getOperator = state.split('').find((item) => OPERATOR.includes(item));

		if (!Validator.isOverMaxDigitLength(state) || !getOperator) {
			return;
		}

		const item = new Calculator(
			getOperator,
			state.split(getOperator).map((item) => Number(item))
		);

		dispatch({
			type: 'setAnswer',
			payload: item.result(),
		});
	};

	const resetCalculator = () => dispatch({ type: 'resetCalculator' });

	return (
		<CalculatorContext.Provider
			value={{
				insertDigits,
				insertOperation,
				setAnswer,
				resetCalculator,
				state
			}}
		>
			{children}
		</CalculatorContext.Provider>
	);
}