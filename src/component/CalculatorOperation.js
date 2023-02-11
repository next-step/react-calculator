import CalculatorOperationItem from "./CalculatorOperationItem";
const OPERATIONS = ["/", "*", "-", "+", "="];

const CalculatorOperation = (props) => {
  const onClickOperation = (operation) => {
    if (props.total === "0" || OPERATIONS.includes(props.total.slice(-1))) {
      alert("숫자를 먼저 입력한 후 연산자를 입력해 주세요.");
    } else {
      props.setTotal(props.total + operation);
    }

    if (operation === "=") {
      onClickReturn();
    }
  };

  const onClickReturn = () => {
    props.setTotal(Math.floor(Number(eval(props.total))));
    if (eval(props.total) === Infinity) {
      props.setTotal(() => "오류");
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
