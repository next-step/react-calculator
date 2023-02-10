import { MouseEvent, useState, useEffect } from "react";
import { IDigitsProps } from "../../types/allProps";

function Digits({ calculation, setCalculation }: IDigitsProps) {
  const [digits, setDigits] = useState("");
  const digitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    if (digits.length < 3) {
      setDigits(digits + e.currentTarget.innerText);
      setCalculation(calculation + e.currentTarget.innerText);
    } else {
      alert("최대 3자리수 까지 입력 가능합니다!");
    }
  };
  useEffect(() => {
    if (calculation === "") {
      setDigits("");
    }
    if (Number.isNaN(Number(calculation.split("")[calculation.length - 1]))) {
      setDigits("");
    }
  }, [calculation]);
  return (
    <div className="digits flex">
      {[...Array(10)].map((data, idx) => (
        <button className="digit" onClick={digitHandler} key={idx}>
          {idx}
        </button>
      ))}
    </div>
  );
}

export default Digits;
