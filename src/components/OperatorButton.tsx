type OperatorButtonProps = {
	setOperator: (value: string) => void;
	value: string;
};

export default function OperatorButton({
	setOperator,
	value,
}: OperatorButtonProps) {
	const handleClickOperator = () => {
		setOperator(value);
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
