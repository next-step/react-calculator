import { resetCalculator } from '@/feature/calculator/calculatorSlice';
import { useDispatch } from 'react-redux';

export default function ResetContainer() {
	const dispatch = useDispatch();

	return (
		<div className="modifiers subgrid">
			<button className="modifier" onClick={() => dispatch(resetCalculator())}>AC</button>
		</div>
	);
}