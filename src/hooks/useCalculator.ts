import { useState } from 'react';

export default function useCalculator() {
	const [display, setDisplay] = useState('0');

	const enter = (value: string) => {
		setDisplay(prevState => Number(prevState + value).toFixed(0));
	};

	const calculate = () => {};

	return { display, enter, calculate };
}
