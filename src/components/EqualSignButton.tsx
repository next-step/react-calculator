type ResultButtonProps = {
	value: string;
};

export default function EqualSignButton({value}: ResultButtonProps) {
	return (
		<button className='operation'>
			{value}
		</button>
	);
}
