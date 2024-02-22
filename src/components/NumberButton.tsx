import {Validation} from '../utils/Validation';
import fixtures from '../fixtures';

type NumberButtonProps = {
	setFirstNumber: (value: string) => void;
	firstNumber: string;
	setSecondNumber: (value: string) => void;
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

			setFirstNumber(firstNumber + value);
		}

		if (operator) {
			if (validation.isNotValidNumberLength(secondNumber)) {
				alert(alertMessage);
				return;
			}

			if (validation.isNotValidZero(secondNumber, value)) {
				return;
			}

			setSecondNumber(secondNumber + value);
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
