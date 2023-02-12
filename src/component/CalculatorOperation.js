import CalculatorOperationItem from "./CalculatorOperationItem";
import { useContext } from "react";
import { ContextTotal } from "../context/ContextTotal";
const OPERATIONS = ["/", "*", "-", "+", "="];

const CalculatorOperation = () => {
  const { total, setTotal } = useContext(ContextTotal);

  const onClickOperation = (operation) => {
    if (total === "0" || OPERATIONS.includes(total.slice(-1))) {
      alert("숫자를 먼저 입력한 후 연산자를 입력해 주세요.");
    } else {
      setTotal(total + operation);
    }

    if (operation === "=") {
      onClickReturn();
    }
  };

  const onClickReturn = () => {
    setTotal(Math.floor(Number(eval(total))));
    if (eval(total) === Infinity) {
      setTotal(() => "오류");
    }
  };

  return (
    <div className="operations subgrid">
      {OPERATIONS.map((operation, index) => (
        <CalculatorOperationItem
          operation={operation}
          key={index}
          onClick={() => onClickOperation(operation)}
        />
      ))}
    </div>
  );
};

export default CalculatorOperation;
