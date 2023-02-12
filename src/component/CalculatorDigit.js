import CalculatorDigitItem from "./CalculatorDigitItem";
import { useContext } from "react";
import { ContextTotal } from "../context/ContextTotal";
const DIGIT = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];

const CalculatorDigit = () => {
  const { total, setTotal } = useContext(ContextTotal);

  const onClickNumber = (num) => {
    if (total === "0") {
      setTotal(num);
    } else {
      setTotal(total + num);
    }
  };

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
