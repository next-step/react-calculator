interface DisplayProps {
	value: string;
}

const Display = ({ value }: DisplayProps) => {
	return (
		<div id='total' className='display'>
			{value}
		</div>
	);
};

export default Display;
