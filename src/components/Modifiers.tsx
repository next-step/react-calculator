type ModifiersProps = {
	onClickAc: () => void;
};

export default function Modifiers({onClickAc}: ModifiersProps) {
	return (
		<div className='modifiers subgrid'>
			<button className='modifier' onClick={onClickAc}>AC</button>
		</div>
	);
}
