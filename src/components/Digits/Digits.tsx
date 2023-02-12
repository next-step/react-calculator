import React, {memo, useMemo} from "react";
import Digit from "../Digit/Digit";

interface DigitsProps {
  onClick: (numeric: number) => void;
}

const Digits = ({onClick}: DigitsProps) => {
  const nemerics = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  return (
    <div className="digits flex">
      {nemerics.map((numeric) => (
        <Digit
          numeric={numeric}
          onClickDigit={() => onClick(numeric)}
          key={numeric}
        />
      ))}
      ;
    </div>
  );
};

export default Digits;
