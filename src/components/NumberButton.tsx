type NumberButtonProps = {
	setFirstNumber: (value: string) => void;
	firstNumber: string;
	setSecondNumber: (value: string) => void;
	secondNumber: string;
	operator: string;
	value: number;
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
	const isNotValidNumberLength = (number: string) => (number.length > 2);

	const handleClickNumber = (e: React.MouseEvent<HTMLButtonElement>) => {
		const {value: number} = e.currentTarget;

		if (!operator) {
			if (isNotValidNumberLength(firstNumber)) {
				alert(alertMessage);
				return;
			}

			setFirstNumber(firstNumber + number);
		}

		if (operator) {
			if (isNotValidNumberLength(secondNumber)) {
				alert(alertMessage);
				return;
			}

			setSecondNumber(secondNumber + number);
		}

		console.log(firstNumber, operator, secondNumber);
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
