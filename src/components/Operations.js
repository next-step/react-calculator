const Operations = ({ handleOperationClick }) => {
  const operations = ["/", "X", "-", "+", "="];

  const operationButtons = (operation, handleOperationClick) => (
    <button
      className="operation"
      onClick={() => handleOperationClick(operation)}
      key={operation}
    >
      {operation}
    </button>
  );

  return (
    <div className="operations subgrid">
      {operations.map((operation) =>
        operationButtons(operation, handleOperationClick)
      )}
    </div>
  );
};

export default Operations;
