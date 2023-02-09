import { Dispatch, SetStateAction, MouseEvent } from "react";

interface IOperationsProps {
  calculation: string;
  setCalculation: Dispatch<SetStateAction<string>>;
}

function Operations({ calculation, setCalculation }: IOperationsProps) {
  const operationHandler = (e: MouseEvent<HTMLButtonElement>) => {
    setCalculation(calculation + e.currentTarget.innerText);
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
      <button className="operation" id="equal-sign">
        =
      </button>
    </div>
  );
}

export default Operations;
