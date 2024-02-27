import Button from "../button/Button";
import { FC } from "react";
import { ButtonVariantEnum } from "../button/Button.enum.ts";

interface Props {
    handleCalculatorResult: () => void;
}
const Modifier: FC<Props> = ({ handleCalculatorResult }) => {
  return (
    <div className="modifiers subgrid">
      <Button variant={ButtonVariantEnum.MODIFIER} onClick={handleCalculatorResult}>
        AC
      </Button>
    </div>
  );
};

export default Modifier;