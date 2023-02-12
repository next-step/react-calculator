const CalculatorDigit = ({ digit, onClick }) => {
  return (
    <button className="digit" onClick={onClick}>
      {digit}
    </button>
  );
};

export default CalculatorDigit;
