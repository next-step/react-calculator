const operators = ['/', 'X', '-', '+', '='];

function Operator({ onClick }) {
  const handleClick = (value) => {
    onClick(value, 'operator');
  };

  return (
    <>
      {operators.map((operator) => (
        <button
          type="button"
          key={operator}
          className="operation"
          onClick={() => handleClick(operator)}
        >
          {operator}
        </button>
      ))}
    </>
  );
}

export default Operator;
