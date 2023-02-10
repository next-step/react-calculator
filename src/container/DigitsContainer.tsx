import { Digit } from '@/components';

interface Props {
	insertDigits: (digits: string) => void;
}

const DIGITS = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'];

export default function DigitsContainer({ insertDigits }: Props) {
	return (
		<div className="digits flex">
			{DIGITS.map((digit) => (
				<Digit
					key={digit}
					onClick={insertDigits}
					digit={digit}/>
			))}
		</div>
	);
}