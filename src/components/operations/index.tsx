import { MouseEvent, useState } from "react";
import { IOperationsProps } from "../../types/calculate";

function Operations({ calculation, setCalculation }: IOperationsProps) {
  const [operator, setOperator] = useState("X");
  const operationHandler = (e: MouseEvent<HTMLButtonElement>) => {
    if (
      Number.isNaN(Number(calculation.split("")[calculation.length - 1])) ===
        false &&
      calculation.includes(operator) === false
    ) {
      setCalculation(calculation + e.currentTarget.innerText);
      setOperator(e.currentTarget.innerText);
    }
    if (Number.isNaN(Number(calculation.split("")[calculation.length - 1]))) {
      alert("숫자를 먼저 입력한 후 연산자를 입력해주세요!");
    }
    if (calculation.includes(operator)) {
      alert("계산 수식은 한번만 입력할 수 있습니다!");
    }
  };

  const calcurationHandler = () => {
    const formula = calculation.split(operator);
    if (operator === "/") {
      setCalculation(`${Math.floor(Number(formula[0]) / Number(formula[1]))}`);
    }
    if (operator === "X") {
      setCalculation(`${Math.floor(Number(formula[0]) * Number(formula[1]))}`);
    }
    if (operator === "-") {
      setCalculation(`${Math.floor(Number(formula[0]) - Number(formula[1]))}`);
    }
    if (operator === "+") {
      setCalculation(`${Math.floor(Number(formula[0]) + Number(formula[1]))}`);
    }
    setOperator("X");
  };

  return (
    <div className="operations subgrid">
      <button onClick={operationHandler} className="operation">
        /
      </button>
      <button onClick={operationHandler} className="operation">
        X
      </button>
      <button onClick={operationHandler} className="operation">
        -
      </button>
      <button onClick={operationHandler} className="operation">
        +
      </button>
      <button
        onClick={calcurationHandler}
        className="operation"
        id="equal-sign"
      >
        =
      </button>
    </div>
  );
}

export default Operations;