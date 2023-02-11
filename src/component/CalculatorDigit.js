import CalculatorDigitItem from "./CalculatorDigitItem";
const DIGIT = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

const CalculatorDigit = (props) => {
  return (
    <div className="digits flex">
      {DIGIT.map((num) => (
        <CalculatorDigitItem
          number={num}
          key={num}
          onClick={() => props.setTotal(num)}
        />
      ))}
    </div>
  );
};

export default CalculatorDigit;
