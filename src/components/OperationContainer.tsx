import { OPERATOR } from '@/constants';
import Operation from './Operation';

export default function OperationContainer() {
	return (
		<div className="operations subgrid">
			{OPERATOR.map((operator) => (
				<Operation
					key={operator}
					operator={operator}
				/>
			))}
		</div>
	);
}