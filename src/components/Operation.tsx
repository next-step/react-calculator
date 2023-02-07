import useCalculator from '@/hooks/useCalculator';

interface Props {
	operator: string;
}

export default function Operation({ operator }: Props) {
	const { setAnswer, insertOperation } = useCalculator();

	const clickOperatorHandler = () => {
		if (operator === '=') {
			setAnswer();
			return;
		}

		insertOperation(operator);
	};

	return (
		<button
			className="operation"
			onClick={clickOperatorHandler}
		>{operator}</button>
	);
}