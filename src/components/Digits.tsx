import NumberButton from './NumberButton';

type DigitsProps = {
	setFirstNumber: (value: string) => void;
	firstNumber: string;
	setSecondNumber: (value: string) => void;
	secondNumber: string;
	operator: string;
};

export default function Digits({
	setFirstNumber,
	firstNumber,
	setSecondNumber,
	secondNumber,
	operator,
}: DigitsProps) {
	const Numbers = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'];

	return (
		<div className='digits flex'>
			{Numbers.map(number => (
				<NumberButton
					key={number}
					setFirstNumber={setFirstNumber}
					firstNumber={firstNumber}
					setSecondNumber={setSecondNumber}
					secondNumber={secondNumber}
					operator={operator}
					value={number}
				/>
			))}
		</div>
	);
}
