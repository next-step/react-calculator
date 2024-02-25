import Button from "../button/Button";
import { FC } from "react";
import { OperationTypeEnum } from "../operation/Opertaiton.type.ts";
import { ButtonVariantEnum } from "../button/Button.type.ts";

interface Props {
  setNumber: (number: { left: string; right: string }) => void;
  number: { left: string; right: string };
  operator: { render: string; type: OperationTypeEnum };
}
const Digit: FC<Props> = ({
  setNumber,
  number: { left, right },
  operator: { type },
}) => {
  const handleOnClickDigit = (digit: string) => {
    if (
      (left.length >= 3 && OperationTypeEnum.INIT === type) ||
      right.length >= 3
    )
      return alert("숫자는 3자리까지만 입력 가능합니다.");

    setNumber(
      Object.assign(
        { left, right },
          OperationTypeEnum.INIT === type
          ? { left: `${Number(`${left}${digit}`)}` }
          : { right: `${Number(`${right}${digit}`)}` },
      ),
    );
  };

  return (
    <div className="digits flex">
      {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((digit) => {
        return (
          <Button
            variant={ButtonVariantEnum.DIGIT}
            key={digit}
            onClick={() => handleOnClickDigit(`${digit}`)}
          >
            {digit}
          </Button>
        );
      })}
    </div>
  );
};

export default Digit;