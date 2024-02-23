function Operator({ handleOperation }) {
  const operations = ["/", "X", "-", "+", "="];

  return (
    <div className="operations subgrid">
      {operations.map((operation) => (
        <button
          key={operation}
          className="operation"
          onClick={() => handleOperation(operation)}>
          {operation}
        </button>
      ))}
    </div>
  );
}

export default Operator;
