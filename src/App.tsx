import { NumberButton } from "./components/NumberButton";
import "./css/index.css";
import { CALCULATOR_NUMBERS } from "./helper";

function App() {
  return (
    <>
      <div id="app">
        <div className="calculator">
          <h1 id="total">0</h1>
          <div className="digits flex">
            {[...CALCULATOR_NUMBERS].reverse().map((number, i) => (
              <NumberButton label={number} key={i} />
            ))}
          </div>
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
    </>
  );
}

export default App;
