import { useCalculator } from "./calculator/service/hooks/calculator/useCalculator";
import Calculator from "./calculator/ui/Calculator";
import "./css/reset.css";
import "./css/index.css";

function App() {
	const { expression, handleInput, reset, calculateAndUpdateLastOperation } =
		useCalculator();

	return (
		<Calculator>
			<Calculator.Display value={expression} />
			<Calculator.Reset onClick={reset} />
			<Calculator.Keypad onClick={handleInput} />
			<Calculator.Operators
				onClick={handleInput}
				onCalculate={calculateAndUpdateLastOperation}
			/>
		</Calculator>
	);
}

export default App;
