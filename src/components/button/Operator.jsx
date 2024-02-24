function Operator({ onClick }) {
  const handleClick = (value) => {
    onClick(value, 'operator');
  };

  return (
    <>
      <button
        type="button"
        className="operation"
        onClick={() => handleClick('/')}
      >
        /
      </button>
      <button
        type="button"
        className="operation"
        onClick={() => handleClick('X')}
      >
        X
      </button>
      <button
        type="button"
        className="operation"
        onClick={() => handleClick('-')}
      >
        -
      </button>
      <button
        type="button"
        className="operation"
        onClick={() => handleClick('+')}
      >
        +
      </button>
      <button
        type="button"
        className="operation"
        onClick={() => handleClick('=')}
      >
        =
      </button>
    </>
  );
}

export default Operator;
