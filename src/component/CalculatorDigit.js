import CalculatorDigitItem from "./CalculatorDigitItem";
import { useEffect } from "react";
const DIGIT = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];

const CalculatorDigit = (props) => {
  const onClickNumber = (num) => {
    if (props.total === "0") {
      props.setTotal(num);
    } else {
      props.setTotal(props.total + num);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="digits flex">
      {DIGIT.map((num) => (
        <CalculatorDigitItem
          number={num}
          key={num}
          onClick={() => onClickNumber(num)}
        />
      ))}
    </div>
  );
};

export default CalculatorDigit;
