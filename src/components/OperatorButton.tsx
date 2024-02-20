type OperatorButtonProps = {
	setOperator: (value: string) => void;
	value: string;
};

export default function OperatorButton({
	setOperator,
	value,
}: OperatorButtonProps) {
	const handleClickOperator = (e: React.MouseEvent<HTMLButtonElement>) => {
		const {value: operator} = e.currentTarget;
		setOperator(operator);
	};

	return (
		<button
			className='operation'
			onClick={handleClickOperator}
			value={value}
		>
			{value}
		</button>
	);
}
