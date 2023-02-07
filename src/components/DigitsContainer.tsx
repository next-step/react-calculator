import { DIGIT } from '@/constants';
import Digits from '@/components/Digits';

export default function DigitsContainer() {
	return (
		<div className="digits flex">
			{DIGIT.map((digits, index) => (<Digits key={index} digits={digits}/>))}
		</div>
	);
}