import { useState } from "react";
import "./App.css";
import Button from "./Components/Button";

function App() {
  const [display, setDisplay] = useState<string>("");
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operators = ["/", "%", "-", "+", "="];

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = e.currentTarget.value.toString();

    if (!operators.includes(value)) {
      console.log(value);
      setDisplay((currentFormula) => `${currentFormula}${value}`);
    } else {
      if (value === "=") {
        setDisplay(eval(display));
      } else if (value === "AC") {
        setDisplay("0");
      } else {
        setDisplay((currentFormula) => `${currentFormula}${value}`);
      }
    }
  };

  return (
    <div id="app">
      <div className="calculator">
        <h1 id="total">{display}</h1>
        <div className="digits flex">
          {numbers.map((num) => {
            return (
              <Button
                clickHandler={clickHandler}
                value={num.toString()}
                className="digit"
              />
            );
          })}
        </div>
        <div className="modifiers subgrid">
          <Button clickHandler={clickHandler} value="AC" />
        </div>
        <div className="operations subgrid">
          {operators.map((operator) => {
            return <Button clickHandler={clickHandler} value={operator} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
