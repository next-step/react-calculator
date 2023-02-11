const CalculatorOperationItem = (props) => {
  return (
    <button className="operation">
      {props.operation === "*" ? "X" : props.operation}
    </button>
  );
};

export default CalculatorOperationItem;
