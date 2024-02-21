import EqualSignButton from './EqualSignButton';
import OperatorButton from './OperatorButton';

type OperationsProps = {
	firstNumber: string;
	secondNumber: string;
	operator: string;
	setResultNumber: (value: string) => void;
	setFirstNumber: (value: string) => void;
	setSecondNumber: (value: string) => void;
	setOperator: (value: string) => void;
};

export default function Operations({
	firstNumber,
	secondNumber,
	operator,
	setResultNumber,
	setFirstNumber,
	setSecondNumber,
	setOperator,
}: OperationsProps) {
	const Operators = ['/', 'X', '-', '+'];
	const equalSign = '=';

	return (
		<div className='operations subgrid'>
			{Operators.map(operator => (
				<OperatorButton
					key={operator}
					setOperator={setOperator}
					value={operator}/>
			))}
			<EqualSignButton
				value={equalSign}
				firstNumber={firstNumber}
				secondNumber={secondNumber}
				operator={operator}
				setResultNumber={setResultNumber}
				setFirstNumber={setFirstNumber}
				setSecondNumber={setSecondNumber}
				setOperator={setOperator}
			/>
		</div>
	);
}
