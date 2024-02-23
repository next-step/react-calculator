import EqualSignButton from './EqualSignButton';
import OperatorButton from './OperatorButton';
import fixtures from '../fixtures';

type OperationsProps = {
	handleClickEqualSign: () => void;
	handleClickOperator: (value: string) => void;
};

export default function Operations({
	handleClickEqualSign,
	handleClickOperator,
}: OperationsProps) {
	const {operators} = fixtures;

	return (
		<div className='operations subgrid'>
			{operators.map((op: string) => (
				<OperatorButton
					key={op}
					value={op}
					handleClickOperator={handleClickOperator}
				/>
			))}
			<EqualSignButton
				handleClickEqualSign={handleClickEqualSign}
			/>
		</div>
	);
}
