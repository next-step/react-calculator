import {type Dispatch, type SetStateAction} from 'react';

import {Validation} from '../utils/Validation';

import fixtures from '../fixtures';

type NumberButtonProps = {
	setFirstNumber: Dispatch<SetStateAction<string>>;
	firstNumber: string;
	setSecondNumber: Dispatch<SetStateAction<string>>;
	secondNumber: string;
	operator: string;
	value: string;
};

export default function NumberButton({
	setFirstNumber,
	firstNumber,
	setSecondNumber,
	secondNumber,
	operator,
	value,
}: NumberButtonProps) {
	const validation = new Validation();

	const {alertMessage} = fixtures;

	const setNumber = (
		prev: string,
		current: string,
		setter: (value: string) => void,
	) => {
		if (validation.isNotValidNumberLength(prev)) {
			alert(alertMessage);
			return;
		}

		if (validation.isNotValidZero(prev, current)) {
			return;
		}

		setter(value);
	};

	const handleClickNumber = () => {
		if (!operator) {
			setNumber(
				firstNumber,
				value,
				value => {
					setFirstNumber(firstNumber => (firstNumber + value));
				},
			);
		}

		if (operator) {
			setNumber(
				secondNumber,
				value,
				value => {
					setSecondNumber((secondNumber: string) => (secondNumber + value));
				},
			);
		}
	};

	return (
		<button
			className='digit'
			onClick={handleClickNumber}
			value={value}
		>
			{value}
		</button>
	);
}
