import { DigitsContainer, OperationContainer, ResetContainer } from '@/container';
import useCalculator from '@/hooks/useCalculator';

function App() {
	const { state } = useCalculator();

	return (
		<div className="App">
			<div className="calculator">
				<h1 id="total">{state}</h1>
				<DigitsContainer/>
				<ResetContainer/>
				<OperationContainer/>
			</div>
		</div>
	);
}

export default App;
