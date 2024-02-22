import {Calculator} from '../utils/Calculator';

type ResultButtonProps = {
	value: string;
	firstNumber: string;
	secondNumber: string;
	operator: string;
	setResultNumber: (value: string) => void;
	setFirstNumber: (value: string) => void;
	setSecondNumber: (value: string) => void;
	setOperator: (value: string) => void;
};

export default function EqualSignButton({
	value,
	firstNumber,
	secondNumber,
	operator,
	setResultNumber,
	setFirstNumber,
	setSecondNumber,
	setOperator,

}: ResultButtonProps) {
	const handleInfinity = (result: string) => result === 'Infinity'
		? '오류' : result;

	const handleClickEqualSign = () => {
		console.log(firstNumber, secondNumber, value);
		if (secondNumber === '') {
			setResultNumber(firstNumber);
			setFirstNumber('');
			setSecondNumber('');
			setOperator('');
			return;
		}

		let calculatedResult = 0;
		const calculator = new Calculator();

		const num1 = Number(firstNumber);
		const num2 = Number(secondNumber);

		switch (operator) {
			case '+':
				calculatedResult = calculator.sum(num1, num2);
				break;
			case '-':
				calculatedResult = calculator.subtract(num1, num2);
				break;
			case 'X':
				calculatedResult = calculator.multiply(num1, num2);
				break;
			case '/':
				calculatedResult = calculator.divide(num1, num2);
				break;
			default:
				break;
		}

		setResultNumber(handleInfinity(String(calculatedResult)));
		setFirstNumber('');
		setSecondNumber('');
		setOperator('');
	};

	return (
		<button className='operation' onClick={handleClickEqualSign}>
			{value}
		</button>
	);
}
