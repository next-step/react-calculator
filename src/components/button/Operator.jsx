const operators = ['/', 'X', '-', '+', '='];

function Operator({ onClick }) {
  return (
    <>
      {operators.map((operator) => (
        <button
          type="button"
          key={operator}
          className="operation"
          onClick={() => onClick(operator)}
        >
          {operator}
        </button>
      ))}
    </>
  );
}

export default Operator;
