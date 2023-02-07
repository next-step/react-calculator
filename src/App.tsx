import { useAppSelector } from '@/store/hooks';
import { calculatorValue } from '@/feature/calculator/calculatorSlice';
import DigitsContainer from '@/components/DigitsContainer';
import OperationContainer from '@/components/OperationContainer';
import ResetContainer from './components/ResetContainer';

function App() {
	const calculator = useAppSelector(calculatorValue);

	return (
		<div className="App">
			<div className="calculator">
				<h1 id="total">{calculator}</h1>
				<DigitsContainer/>
				<ResetContainer/>
				<OperationContainer/>
			</div>
		</div>
	);
}

export default App;
