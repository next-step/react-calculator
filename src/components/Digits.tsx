import fixtures from '../fixtures';
import NumberButton from './NumberButton';

type DigitsProps = {
	handleClickNumber: (value: string) => void;
};

export default function Digits({
	handleClickNumber,
}: DigitsProps) {
	const {numbers} = fixtures;

	return (
		<div className='digits flex'>
			{numbers.map(number => (
				<NumberButton
					key={number}
					value={number}
					handleClickNumber={handleClickNumber}
				/>
			))}
		</div>
	);
}
