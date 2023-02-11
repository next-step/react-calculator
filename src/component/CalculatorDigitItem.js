const CalculatorDigitItem = (props) => {
  return (
    <button className="digit" onClick={props.onClick}>
      {props.number}
    </button>
  );
};

export default CalculatorDigitItem;
