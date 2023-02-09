import { Operation } from '@/components';
import { OPERATOR } from '@/constants';

interface Props {
	setAnswer: () => void;
	insertOperation: (operation: string) => void;
}

export default function OperationContainer({ setAnswer, insertOperation }: Props) {
	return (
		<div className="operations subgrid">
			{OPERATOR.map((operator: string) => (
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