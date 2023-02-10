import { MouseEvent, useState, useEffect } from "react";
import { IDigitsProps } from "../../types/allProps";

const DIGIT_MAX_LENGTH = 3;

function Digits({ calculation, setCalculation }: IDigitsProps) {
  const [digits, setDigits] = useState("");
  const isOperatorEnteredFirst = Number.isNaN(
    Number(calculation.split("")[calculation.length - 1])
  );

  const digitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    if (digits.length < DIGIT_MAX_LENGTH) {
      setDigits(digits + e.currentTarget.innerText);
      setCalculation(calculation + e.currentTarget.innerText);
    }
    if (digits.length === DIGIT_MAX_LENGTH) {
      alert("최대 3자리수 까지 입력 가능합니다!");
    }
  };

  useEffect(() => {
    if (calculation === "") {
      setDigits("");
    }
    if (isOperatorEnteredFirst) {
      setDigits("");
    }
  }, [calculation]);

  return (
    <div className="digits flex">
      {[...Array(10)].map((data, idx) => (
        <button className="digit" onClick={digitHandler} key={idx}>
          {9 - idx}
        </button>
      ))}
    </div>
  );
}

export default Digits;
