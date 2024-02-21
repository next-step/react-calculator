import { useState } from 'react';

export default function useCalculator() {
	const [display, setDisplay] = useState('0');

	const addNumber = (value: string) => {
		if (display.length > 2) {
			alert('숫자는 3자리까지만 입력 가능합니다.');
			return;
		}

		if (display === '0') {
			setDisplay(value);
			return;
		}

		setDisplay(display + value);
	};

	const enter = (value: string) => {
		if (/^[0-9]$/.test(value)) {
			addNumber(value);
			return;
		}

		if (/^[+\-*\/]$/.test(value)) {
			setDisplay(display + value);
			return;
		}

		throw new Error('잘못된 입력입니다.');
	};

	const calculate = () => {};

	return { display, enter, calculate };
}
