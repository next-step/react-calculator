import { Digit } from '@/components';
import { Calculator, Validator } from '../domain';
import { MESSAGE } from '../constants';

interface Props {
	insertDigit: (digits: string) => void;
	calculatorState: string;
}

const DIGITS = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'];
const { MAX_DIGIT_LENGTH } = Calculator;


export default function DigitsContainer({ insertDigit, calculatorState }: Props) {
	const handleInsertDigit = (digit: string) => {
		if (!Validator.isOverMaxDigitLength(calculatorState + digit)) {
			alert(MESSAGE.MAX_DIGIT_LENGTH(MAX_DIGIT_LENGTH));
			return;
		}

		insertDigit(digit);
	};

	return (
		<div className="digits flex">
			{DIGITS.map((digit) => (
				<Digit
					key={digit}
					onClick={handleInsertDigit}
					digit={digit}/>
			))}
		</div>
	);
}