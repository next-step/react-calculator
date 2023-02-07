import DigitsContainer from '@/components/DigitsContainer';
import { useAppSelector } from './store/hooks';
import { calculatorValue } from './feature/calculator/calculatorSlice';

function App() {
	const calculator = useAppSelector(calculatorValue);

	return (
		<div className="App">
			<div className="calculator">
				<h1 id="total">{calculator}</h1>
				<DigitsContainer/>
				<div className="modifiers subgrid">
					<button className="modifier">AC</button>
				</div>
				<div className="operations subgrid">
					<button className="operation">/</button>
					<button className="operation">X</button>
					<button className="operation">-</button>
					<button className="operation">+</button>
					<button className="operation">=</button>
				</div>
			</div>
		</div>
	);
}

export default App;
