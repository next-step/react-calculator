import useCalculator from '../store/hooks/useCalculator';

export default function ResetContainer() {
	const { resetCalculator } = useCalculator();

	return (
		<div className="modifiers subgrid">
			<button className="modifier" onClick={resetCalculator}>AC</button>
		</div>
	);
}