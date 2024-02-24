import useCalculator from 'src/hooks/useCalculator.ts';

function App() {
	const { enter, calculate, clear, display } = useCalculator();

	const digits = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'];

	const operators = ['/', 'x', '-', '+'];

	return (
		<div className="calculator">
			<h1 id="total">{display}</h1>
			<div className="digits flex">
				{digits.map(digit => (
					<button className="digit" key={digit} onClick={() => enter(digit)}>
						{digit}
					</button>
				))}
			</div>
			<div className="modifiers subgrid">
				<button
					className="modifier"
					onClick={() => {
						clear();
					}}
				>
					AC
				</button>
			</div>
			<div className="operations subgrid">
				{operators.map(operator => (
					<button className="operation" key={operator} onClick={() => enter(operator)}>
						{operator}
					</button>
				))}
				<button
					className="operation"
					onClick={() => {
						calculate();
					}}
				>
					=
				</button>
			</div>
		</div>
	);
}

export default App;
