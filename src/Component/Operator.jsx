function Operator({ handleOperation, handleCalculate }) {
  const operations = ["/", "X", "-", "+"];
  const style = {
    fontSize: "2rem",
    border: "0.5px solid #98999b",
    backgroundColor: "orange",
  };

  const subgrid = {
    display: "grid",
    gridArea: "oper",
    gridAutoFlow: "col",
    gridAutoColumns: "1fr",
  };

  return (
    <div className="operations subgrid" style={{ ...subgrid, ...style }}>
      {operations.map((operation) => (
        <button
          key={operation}
          className="operation"
          onClick={() => handleOperation(operation)}
          style={style}>
          {operation}
        </button>
      ))}
      <button key={4} onClick={handleCalculate} style={style}>
        =
      </button>
    </div>
  );
}

export default Operator;
