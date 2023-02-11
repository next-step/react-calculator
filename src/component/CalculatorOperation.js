import CalculatorOperationItem from "./CalculatorOperationItem";
const OPERATIONS = ["/", "*", "-", "+", "="];

const CalculatorOperation = ({ totalState }) => {
  const onClickOperation = (operation) => {
    if (
      totalState.total === "0" ||
      OPERATIONS.includes(totalState.total.slice(-1))
    ) {
      alert("숫자를 먼저 입력한 후 연산자를 입력해 주세요.");
    } else {
      totalState.setTotal(totalState.total + operation);
    }

    if (operation === "=") {
      onClickReturn();
    }
  };

  const onClickReturn = () => {
    totalState.setTotal(Math.floor(Number(eval(totalState.total))));
    if (eval(totalState.total) === Infinity) {
      totalState.setTotal(() => "오류");
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
