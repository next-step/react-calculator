import { Digits } from '@/components';
import useCalculator from '@/hooks/useCalculator';

const DIGIT = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'];

export default function DigitsContainer() {
	const { insertDigits } = useCalculator();

	return (
		<div className="digits flex">
			{DIGIT.map((digits, index) => (
				<Digits
					key={index}
					onClick={insertDigits}
					digits={digits}/>
			))}
		</div>
	);
}