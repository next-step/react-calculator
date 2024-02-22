import EqualSignButton from './EqualSignButton';
import OperatorButton from './OperatorButton';
import fixtures from '../fixtures';

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
	const {operators, equalSign} = fixtures;

	return (
		<div className='operations subgrid'>
			{operators.map((op: string) => (
				<OperatorButton
					key={operator}
					setOperator={setOperator}
					value={op}/>
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
