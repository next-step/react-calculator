import { useState } from 'react';

export default function useCalculator() {
	const [display, setDisplay] = useState('0');

	const addNumber = (value: string) => {
		if (display.split(/[+\-x/]/).pop()?.length === 3) {
			alert('숫자는 3자리까지만 입력 가능합니다.');
			return;
		}

		if (display === '0' || display === '오류') {
			setDisplay(value);
			return;
		}

		setDisplay(display + value);
	};

	const addOperator = (value: string) => {
		if (/\d$/.test(display)) {
			setDisplay(display + value);
			return;
		}

		setDisplay(display.slice(0, -1) + value);
	};

	const enter = (value: string) => {
		if (/^[0-9]$/.test(value)) {
			addNumber(value);
			return;
		}

		if (/^[+\-x/]$/.test(value)) {
			addOperator(value);
			return;
		}

		throw new Error('잘못된 입력입니다.');
	};

	const executeOperation = (prevState: string) => {
		const operations = prevState.split(/([+\-x/])/).filter(Boolean);

		let startIndex = 1;
		let result: number;

		if (operations[0] === '-' && operations.length > 1) {
			result = -parseInt(operations[1]);
			startIndex = 2;
		} else {
			result = parseInt(operations[0]);
		}

		for (let i = startIndex; i < operations.length; i += 2) {
			const operator = operations[i];
			const nextValue = parseInt(operations[i + 1]);

			switch (operator) {
				case '+':
					result += nextValue;
					break;
				case '-':
					result -= nextValue;
					break;
				case 'x':
					result *= nextValue;
					break;
				case '/':
					if (nextValue === 0) {
						return '오류';
					}
					result = Math.floor(result / nextValue);
					break;
				default:
					return '오류';
			}
		}

		if (isNaN(result) || !isFinite(result)) {
			return '오류';
		}

		return result.toString();
	};

	const calculate = () => {
		if (/[+\-x/]$/.test(display)) {
			alert('숫자를 입력해 주세요.');
			return;
		}

		setDisplay(executeOperation);
	};

	const clear = () => {
		setDisplay('0');
	};

	return { display, enter, calculate, clear };
}
