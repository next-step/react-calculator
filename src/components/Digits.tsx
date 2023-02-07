import { useDispatch } from 'react-redux';
import { calculatorValue, insertDigits } from '@/feature/calculator/calculatorSlice';
import { useAppSelector } from '@/store/hooks';
import Validator from '@/core/Validator';
import { MESSAGE } from '@/constants';

interface Props {
	digits: string;
}

export default function Digits({ digits }: Props) {
	const dispatch = useDispatch();
	const calculator = useAppSelector(calculatorValue);
	const digitHandler = (value: string) => {
		if (calculator === '0' && value === '0') return;

		const updateDigits = calculator + value;

		if (!Validator.isMaxDigitLength(updateDigits)) {
			alert(MESSAGE.MAX_DIGIT_LENGTH);
			return;
		}

		dispatch(insertDigits(value));
	};

	return (
		<button
			className="digit"
			type="button"
			onClick={() => digitHandler(digits)}
		>{digits}</button>
	);
}