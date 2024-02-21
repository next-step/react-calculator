import useCalculator from "./hooks/useCalculator";

const numberPads = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];

function App() {
  const { result, pressNumber, calculate, pressOperator, allClear } =
    useCalculator();
  return (
    <div id="app">
      <div className="calculator">
        <h1 id="total">{result}</h1>
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
        <div className="modifiers subgrid">
          <button className="modifier" onClick={allClear}>
            AC
          </button>
        </div>
        <div className="operations subgrid">
          <button className="operation" onClick={() => pressOperator("/")}>
            /
          </button>
          <button className="operation" onClick={() => pressOperator("*")}>
            X
          </button>
          <button className="operation" onClick={() => pressOperator("-")}>
            -
          </button>
          <button className="operation" onClick={() => pressOperator("+")}>
            +
          </button>
          <button className="operation" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
