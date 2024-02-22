import {Validation} from '../utils/Validation';

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
	const alertMessage = '숫자는 세 자리까지만 입력 가능합니다!';
	const validation = new Validation();

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
