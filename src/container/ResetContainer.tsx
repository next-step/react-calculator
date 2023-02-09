interface Props {
	resetCalculator: () => void;
}

export default function ResetContainer({ resetCalculator }: Props) {
	return (
		<div className="modifiers subgrid">
			<button className="modifier" onClick={resetCalculator}>AC</button>
		</div>
	);
}