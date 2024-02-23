type OperatorButtonProps = {
	value: string;
	handleClickOperator: (value: string) => void;
};

export default function OperatorButton({
	value,
	handleClickOperator,
}: OperatorButtonProps) {
	return (
		<button
			className='operation'
			onClick={() => {
				handleClickOperator(value);
			}}
			value={value}
		>
			{value}
		</button>
	);
}
