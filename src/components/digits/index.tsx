import { MouseEvent, useState, useEffect } from "react";
import useDigit from "../../hooks/useDigit";
import { IDigitsProps } from "../../types/allProps";

const DIGITS_NUMBERS = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function Digits({ calculation, setCalculation }: IDigitsProps) {
  const [digitHandler] = useDigit({ calculation, setCalculation });

  return (
    <div className="digits flex">
      {DIGITS_NUMBERS.map((data) => (
        <button className="digit" onClick={digitHandler} key={data}>
          {data}
        </button>
      ))}
    </div>
  );
}

export default Digits;
