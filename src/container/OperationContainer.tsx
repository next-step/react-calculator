import { Operation } from '@/components';
import { Operator, Validator } from '../domain';
import { MESSAGE } from '../constants';

interface Props {
	setAnswer: () => void;
	insertOperation: (operation: string) => void;
	calculatorState: string;
}

const { symbols: OPERATOR_SYMBOLS, MAX_OPERATOR_LENGTH } = Operator;

export default function OperationContainer({ setAnswer, insertOperation, calculatorState }: Props) {
	const handleInsertOperation = (operator: string) => {
		if (Validator.isMaxOperatorLength(calculatorState + operator)) {
			alert(MESSAGE.MAX_OPERATOR_LENGTH(MAX_OPERATOR_LENGTH));
			return;
		}

		insertOperation(operator);
	};

	return (
		<div className="operations subgrid">
			{OPERATOR_SYMBOLS.map((operator: string) => (
				<Operation
					key={operator}
					onClick={handleInsertOperation}
					operator={operator}/>
			))}
			<Operation
				operator="="
				onClick={setAnswer}
			/>
		</div>
	);
}