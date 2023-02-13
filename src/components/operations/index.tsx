import useOperatin from "../../hooks/useOperatin";
import { IOperationsProps } from "../../types/allProps";

const OPERATIONS = ["/", "X", "-", "+"];

function Operations({ calculation, setCalculation }: IOperationsProps) {
  const [operationHandler, calcurationHandler] = useOperatin({
    calculation,
    setCalculation,
  });

  return (
    <div className="operations subgrid">
      {OPERATIONS.map((data) => (
        <button onClick={operationHandler} key={data}>
          {data}
        </button>
      ))}
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
