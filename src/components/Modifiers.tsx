type ModifiersProps = {
	handleClickAc: () => void;
};

export default function Modifiers({handleClickAc}: ModifiersProps) {
	return (
		<div className='modifiers subgrid'>
			<button className='modifier' onClick={handleClickAc}>AC</button>
		</div>
	);
}
