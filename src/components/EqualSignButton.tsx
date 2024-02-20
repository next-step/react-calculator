import {Calculator} from '../utils/Calculator';

type ResultButtonProps = {
	value: string;
	firstNumber: number;
	secondNumber: number;
};

export default function EqualSignButton({
	value,
	firstNumber,
	secondNumber,
}: ResultButtonProps) {
	const handleClickEqualSign = () => {
		let calculatedResult = 0;

		const calculator = new Calculator();

		calculatedResult = calculator.sum(firstNumber, secondNumber);

		console.log(calculatedResult);
	};

	return (
		<button className='operation' onClick={handleClickEqualSign}>
			{value}
		</button>
	);
}
