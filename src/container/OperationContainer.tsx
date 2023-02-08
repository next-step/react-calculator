import { Operation } from '@/components';
import { OPERATOR } from '@/constants';
import useCalculator from '../store/hooks/useCalculator';

export default function OperationContainer() {
	const { setAnswer, insertOperation } = useCalculator();
	return (
		<div className="operations subgrid">
			{OPERATOR.map((operator: string, index) => (
				<Operation
					key={index}
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