import { MouseEvent } from "react";
import { DIGITS } from "../constants";

type Props = {
  addDigits: (e: MouseEvent<HTMLDivElement>) => void;
};

export const NumberPad = ({ addDigits }: Props) => {
  return (
    <>
      <div className="digits flex" onClick={addDigits}>
        {DIGITS.map((number) => {
          return (
            <button className="digit" key={number} value={number}>
              {number}
            </button>
          );
        })}
      </div>
    </>
  );
};
