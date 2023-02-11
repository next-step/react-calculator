const CalculatorOperationItem = (props) => {
  return (
    <button className="operation" onClick={props.onClick}>
      {props.operation === "*" ? "X" : props.operation}
    </button>
  );
};

export default CalculatorOperationItem;
