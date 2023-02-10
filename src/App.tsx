import { DigitsContainer, OperationContainer, ResetContainer } from '@/container';
import { CalculatorTitle } from '@/components';
import useCalculator from './hooks/useCalculator';

function App() {
	const {
		calculatorState,
		insertDigit,
		insertOperation,
		setAnswer,
		resetCalculator
	} = useCalculator();

	return (
		<div className="App">
			<div className="calculator">
				<CalculatorTitle>{calculatorState}</CalculatorTitle>
				<DigitsContainer
					insertDigit={insertDigit}
					calculatorState={calculatorState}
				/>
				<ResetContainer resetCalculator={resetCalculator}/>
				<OperationContainer
					insertOperation={insertOperation}
					setAnswer={setAnswer}
					calculatorState={calculatorState}
				/>
			</div>
		</div>
	);
}

export default App;
