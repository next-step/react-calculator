import { Operation } from '@/components';
import { Operator } from '../domain';

interface Props {
	setAnswer: () => void;
	insertOperation: (operation: string) => void;
}

const OPERATOR_SYMBOLS = Operator.symbols;

export default function OperationContainer({ setAnswer, insertOperation }: Props) {
	return (
		<div className="operations subgrid">
			{OPERATOR_SYMBOLS.map((operator: string) => (
				<Operation
					key={operator}
					onClick={insertOperation}
					operator={operator}/>
			))}
			<Operation
				operator="="
				onClick={setAnswer}
			/>
		</div>
	);
}