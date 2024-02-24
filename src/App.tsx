import { useState } from "react";
import { NumberButton } from "./components/NumberButton";
import { OperationButton } from "./components/OperationButton";
import "./css/index.css";
import { EOPERATIONS } from "./enums";
import { CALCULATOR_NUMBERS } from "./helper";

function App() {
  /**현재 입력받고 있는 숫자 */
  const [currNumber, setCurrNumber] = useState(0);
  const handleClickButton = (value: number | keyof typeof EOPERATIONS) => {
    if (typeof value === "number") {
      checkNumberLength(value);
    }
  };

  const checkNumberLength = (num: number) => {
    setCurrNumber((prev) => {
      if (prev.toString().length === 3) {
        alert("숫자는 세 자리까지만 입력 가능합니다!");
        return prev;
      } else {
        return !!prev ? +`${prev}${num}` : num;
      }
    });
  };
  return (
    <>
      <div id="app">
        <div className="calculator">
          <h1 id="total">{currNumber}</h1>
          <div className="digits flex">
            {[...CALCULATOR_NUMBERS].reverse().map((number, i) => (
              <NumberButton
                label={number}
                key={i}
                onClick={handleClickButton}
              />
            ))}
          </div>
          <div className="modifiers subgrid">
            <button className="modifier">AC</button>
          </div>
          <div className="operations subgrid">
            {Object.values(EOPERATIONS).map((operation, i) => (
              <OperationButton
                label={operation}
                key={i}
                onClick={handleClickButton}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
