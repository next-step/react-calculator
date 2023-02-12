import { useCalculate } from "../../hooks/useCalculate";
import { AllClear } from "../AllClear";
import { NumberPad } from "../NumberPad";
import { Operation } from "../Operation";
import { Total } from "../Total";

export const Calculator = () => {
  const { operate, addDigits, clear, total } = useCalculate();
  return (
    <>
      <div className="calculator">
        <Total total={total} />
        <NumberPad addDigits={addDigits} />
        <AllClear clear={clear} />
        <Operation operate={operate} />
      </div>
    </>
  );
};
