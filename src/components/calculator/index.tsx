import { useCalculate } from "hooks/useCalculate";
import { AllClearButton } from "components/AllClear";
import { NumberPad } from "components/NumberPad";
import { Operation } from "components/Operation";
import { Total } from "components/Total";

export const Calculator = () => {
  const { operate, onClickDigit, clear, total } = useCalculate();
  return (
    <div className="calculator">
      <Total total={total} />
      <NumberPad onClickDigit={onClickDigit} />
      <AllClearButton clear={clear} />
      <Operation operate={operate} />
    </div>
  );
};
