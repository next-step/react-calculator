import CalculatorDigitItem from "./CalculatorDigitItem";
import { useEffect } from "react";
const DIGIT = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];

const CalculatorDigit = ({ totalState }) => {
  const onClickNumber = (num) => {
    if (totalState.total === "0") {
      totalState.setTotal(num);
    } else {
      totalState.setTotal(totalState.total + num);
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
