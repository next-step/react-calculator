import { useState } from 'react';

interface CalculatorOptions {
	maxDigits?: number;
}

const REGEX = Object.freeze({
	IS_NUMBER: /^[0-9]$/,
	IS_OPERATOR: /^[+\-x/]$/,
	OPERATOR_SPLITTER: /([+\-x/])/g,
	IS_ENDS_WITH_NUMBER: /\d$/,
	IS_ENDS_WITH_OPERATOR: /[+\-x/]$/,
});

export default function useCalculator(
	props: CalculatorOptions = {
		maxDigits: 3,
	},
) {
	const [display, setDisplay] = useState('0');

	const addNumber = (value: string) => {
		if (display.split(REGEX.OPERATOR_SPLITTER).pop()?.length === props.maxDigits) {
			alert(`숫자는 ${props.maxDigits}자리까지만 입력 가능합니다.`);
			return;
		}

		if (display === '0' || display === '오류') {
			setDisplay(value);
			return;
		}

		setDisplay(display + value);
	};

	const addOperator = (value: string) => {
		if (REGEX.IS_ENDS_WITH_NUMBER.test(display)) {
			setDisplay(display + value);
			return;
		}

		setDisplay(display.slice(0, -1) + value);
	};

	const enter = (value: string) => {
		if (REGEX.IS_NUMBER.test(value)) {
			addNumber(value);
			return;
		}

		if (REGEX.IS_OPERATOR.test(value)) {
			addOperator(value);
			return;
		}

		throw new Error('잘못된 입력입니다.');
	};
	const getOperationsTuple = (operations: string[]) => {
		if (operations[0] === '-') {
			operations[0] = '+';
			operations[1] = '-' + operations[1];
		} else {
			operations.unshift('+');
		}

		const operationsTuple: [string, string][] = [];

		for (let i = 0; i < operations.length; i += 2) {
			operationsTuple.push([operations[i], operations[i + 1]]);
		}

		return operationsTuple;
	};

	const reduceOperations = (prev: number, next: [string, string]) => {
		const lookup: Record<string, (prev: number, next: number) => number> = {
			'+': (prev: number, next: number) => prev + next,
			'-': (prev: number, next: number) => prev - next,
			x: (prev: number, next: number) => prev * next,
			'/': (prev: number, next: number) => Math.floor(prev / next),
		};

		const operator = next[0];
		const nextValue = parseInt(next[1]);

		if (!lookup[operator]) {
			throw new Error('잘못된 연산자입니다.');
		}

		return lookup[operator](prev, nextValue);
	};

	const executeOperation = (prevState: string) => {
		const operations = prevState.split(REGEX.OPERATOR_SPLITTER).filter(Boolean);

		const operationsTuple = getOperationsTuple(operations);

		const operationResult = operationsTuple.reduce(reduceOperations, 0);

		if (Number.isNaN(operationResult) || !Number.isFinite(operationResult)) {
			return '오류';
		}

		return operationResult.toString();
	};

	const calculate = () => {
		if (REGEX.IS_ENDS_WITH_OPERATOR.test(display)) {
			alert('숫자를 입력해 주세요.');
			return;
		}

		setDisplay(executeOperation);
	};

	const clear = () => {
		setDisplay('0');
	};

	return { display, enter, calculate, clear, options: props };
}
