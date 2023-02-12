const CalculatorOperation = ({ operation, onClick }) => {
  return (
    <button className="operation" onClick={onClick}>
      {operation}
    </button>
  );
};

export default CalculatorOperation;
