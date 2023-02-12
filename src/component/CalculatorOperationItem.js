const CalculatorOperationItem = ({ onClick, operation }) => {
  return (
    <button className="operation" onClick={onClick}>
      {operation === "*" ? "X" : operation}
    </button>
  );
};

export default CalculatorOperationItem;
