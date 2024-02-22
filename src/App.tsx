import { useCallback } from "react";
import { OperatorSymbols } from "./calculator/calculator";
import Title from "./components/Title";
import { numberPads, operators } from "./constants";
import useCalculator from "./hooks/useCalculator";

function App() {
  const { result, pressNumber, calculate, pressOperator, allClear } =
    useCalculator();

  const bindOperatorPressOperator = useCallback(
    (operators: OperatorSymbols) => {
      return () => pressOperator(operators);
    },
    []
  );

  const bindPressNumber = useCallback((number: string) => {
    return () => pressNumber(number);
  }, []);

  return (
    <div id="app">
      <div className="calculator">
        <Title role="display" as="h1">
          {result}
        </Title>
        <div className="modifiers subgrid">
          <button className="modifier" onClick={allClear}>
            AC
          </button>
        </div>
        <div className="digits flex">
          {numberPads.map((numberPad) => (
            <button
              role={`button_${numberPad}`}
              key={numberPad}
              className="digit"
              onClick={bindPressNumber(numberPad)}
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
                onClick={bindOperatorPressOperator(
                  operator === "X" ? "*" : operator
                )}
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
