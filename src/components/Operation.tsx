import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/store/hooks';
import { calculatorValue, insertOperation } from '@/feature/calculator/calculatorSlice';
import Validator from '@/core/Validator';
import { MESSAGE } from '@/constants';

interface Props {
	operator: string;
}

export default function Operation({ operator }: Props) {
	const dispatch = useDispatch();
	const calculator = useAppSelector(calculatorValue);

	const clickOperatorHandler = () => {
		const isMaxOperatorLength = Validator.isMaxOperatorLength(calculator);

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