const CalculatorDigitItem = ({ onClick, number }) => {
  return (
    <button className="digit" onClick={onClick}>
      {number}
    </button>
  );
};

export default CalculatorDigitItem;
