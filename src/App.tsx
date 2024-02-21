import Title from "./components/Title";
import { numberPads, operators } from "./constants";
import useCalculator from "./hooks/useCalculator";

function App() {
  const { result, pressNumber, calculate, pressOperator, allClear } =
    useCalculator();
  return (
    <div id="app">
      <div className="calculator">
        <Title as="h1">{result}</Title>
        <div className="modifiers subgrid">
          <button className="modifier" onClick={allClear}>
            AC
          </button>
        </div>
        <div className="digits flex">
          {numberPads.map((numberPad) => (
            <button
              key={numberPad}
              className="digit"
              onClick={() => pressNumber(numberPad)}
            >
              {numberPad}
            </button>
          ))}
        </div>
        <div className="operations subgrid">
          {operators.map((operator) => {
            return (
              <button
                key={operator}
                className="operation"
                onClick={() => pressOperator(operator === "X" ? "*" : operator)}
              >
                {operator}
              </button>
            );
          })}
          <button className="operation" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
