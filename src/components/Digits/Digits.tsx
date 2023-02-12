import React, {memo, useMemo} from "react";
import {NUMERICS} from "../../constants/Calcurator";
import Digit from "../Digit/Digit";

interface DigitsProps {
  onClick: (num: number) => void;
}

const Digits = ({onClick}: DigitsProps) => {
  const nemerics = NUMERICS;
  return (
    <div className="digits flex">
      {nemerics.map((numeric) => (
        <Digit numeric={numeric} onClickDigit={onClick} key={numeric} />
      ))}
      ;
    </div>
  );
};

export default Digits;
