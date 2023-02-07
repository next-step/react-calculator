import Operation from '@/components/Operation';
import { OPERATOR } from '@/constants';

export default function OperationContainer() {
	return (
		<div className="operations subgrid">
			{OPERATOR.map((operator: string, index) => (
				<Operation
					key={index}
					operator={operator}/>
			))}
			<Operation operator="="/>
		</div>
	);
}