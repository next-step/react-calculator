import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/store/hooks';
import { calculatorValue, insertOperation, updateAnswer } from '@/feature/calculator/calculatorSlice';
import Validator from '@/core/Validator';
import { MESSAGE, OPERATOR } from '@/constants';
import Calculator from '@/domain/Calculator';

interface Props {
	operator: string;
}

export default function Operation({ operator }: Props) {
	const dispatch = useDispatch();
	const calculator = useAppSelector(calculatorValue);

	const calculateAnswer = () => {
		const getOperator = calculator.split('').find((item: string) => OPERATOR.includes(item));

		if (!getOperator || !Validator.isOverMaxDigitLength(calculator)) {
			return;
		}

		const item = new Calculator(
			getOperator,
			calculator.split(getOperator).map((item) => Number(item))
		);

		dispatch(updateAnswer(item.result()));
	};

	const clickOperatorHandler = () => {
		if (operator === '=') {
			calculateAnswer();
			return;
		}

		if (calculator === '0') {
			return;
		}

		const isMaxOperatorLength = Validator.isMaxOperatorLength(calculator + operator);

		if (isMaxOperatorLength) {
			alert(MESSAGE.MAX_OPERATOR_LENGTH);
			return;
		}

		dispatch(insertOperation(operator));
	};

	return (
		<button
			className="operation"
			onClick={clickOperatorHandler}
		>{operator}</button>
	);
}