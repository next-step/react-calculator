import { DigitsContainer, OperationContainer, ResetContainer } from '@/container';
import { CalculatorTitle } from '@/components';
import useCalculator from './store/hooks/useCalculator';

function App() {
	const { calculatorState } = useCalculator();

	return (
		<div className="App">
			<div className="calculator">
				<CalculatorTitle>{calculatorState}</CalculatorTitle>
				<DigitsContainer/>
				<ResetContainer/>
				<OperationContainer/>
			</div>
		</div>
	);
}

export default App;
