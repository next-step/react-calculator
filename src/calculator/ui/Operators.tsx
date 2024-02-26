import Button from "../../common/ui/Button";
import { OPERATORS, OPERATORS_TYPE } from "../constants";

interface OperatorsProps {
	onClick: (input: string) => void;
	onCalculate: () => void;
}

const Operators = ({ onClick, onCalculate }: OperatorsProps) => {
	return (
		<div className='operations subgrid'>
			{[...OPERATORS].map((operator) => (
				<Button
					key={operator}
					className='operation'
					onClick={() => onClick(operator as OPERATORS_TYPE)}
				>
					{operator}
				</Button>
			))}
			<Button className='operation' onClick={onCalculate}>
				=
			</Button>
		</div>
	);
};

export default Operators;
