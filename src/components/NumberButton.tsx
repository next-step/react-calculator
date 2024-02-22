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

	const handleClickNumber = () => {
		if (!operator) {
			if (validation.isNotValidNumberLength(firstNumber)) {
				alert(alertMessage);
				return;
			}

			if (validation.isNotValidZero(firstNumber, value)) {
				return;
			}

			setFirstNumber((prev: string) => prev + value);
		}

		if (operator) {
			if (validation.isNotValidNumberLength(secondNumber)) {
				alert(alertMessage);
				return;
			}

			if (validation.isNotValidZero(secondNumber, value)) {
				return;
			}

			setSecondNumber((prev: string) => prev + value);
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
