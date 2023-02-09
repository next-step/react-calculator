import { Digits } from '@/components';

interface Props {
	insertDigits: (digits: string) => void;
}

const DIGIT = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'];

export default function DigitsContainer({ insertDigits }: Props) {

	return (
		<div className="digits flex">
			{DIGIT.map((digits) => (
				<Digits
					key={digits}
					onClick={insertDigits}
					digits={digits}/>
			))}
		</div>
	);
}