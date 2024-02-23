type NumberButtonProps = {
	handleClickNumber: (value: string) => void;
	value: string;
};

export default function NumberButton({
	handleClickNumber,
	value,
}: NumberButtonProps) {
	const handleClick = () => {
		handleClickNumber(value);
	};

	return (
		<button
			className='digit'
			onClick={handleClick}
			value={value}
		>
			{value}
		</button>
	);
}
