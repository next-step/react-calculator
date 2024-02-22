import fixtures from '../fixtures';
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
	const {numbers} = fixtures;

	return (
		<div className='digits flex'>
			{numbers.map(number => (
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
