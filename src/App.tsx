import { DigitsContainer, OperationContainer, ResetContainer } from '@/container';
import { CalculatorTitle } from '@/components';
import useCalculator from './hooks/useCalculator';

function App() {
	const {
		calculatorState,
		insertDigits,
		insertOperation,
		setAnswer,
		resetCalculator
	} = useCalculator();

	return (
		<div className="App">
			<div className="calculator">
				<CalculatorTitle>{calculatorState}</CalculatorTitle>
				<DigitsContainer insertDigits={insertDigits}/>
				<ResetContainer resetCalculator={resetCalculator}/>
				<OperationContainer
					insertOperation={insertOperation}
					setAnswer={setAnswer}
				/>
			</div>
		</div>
	);
}

export default App;
