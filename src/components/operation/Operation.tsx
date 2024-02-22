import { ReactNode } from "react";
import Button from "../button/Button";
import { BUTTON_VARIANTS } from "../button/Button.type";
import { OPERATION_TYPE_VARIANT, OperationType } from "./Opertaiton.type";

const OPERATION_BUTTON_LIST: { render: ReactNode; type: OperationType }[] = [
  { render: "/", type: OPERATION_TYPE_VARIANT.DIVIDE },
  { render: "X", type: OPERATION_TYPE_VARIANT.MULTIPLE },
  { render: "-", type: OPERATION_TYPE_VARIANT.SUBTRACT },
  { render: "+", type: OPERATION_TYPE_VARIANT.ADD },
  { render: "=", type: OPERATION_TYPE_VARIANT.EQUAL },
];

const Operation = () => {
  return (
    <div className="operations subgrid">
      {OPERATION_BUTTON_LIST.map(({ render, type }, i) => (
        <Button key={type + i} variant={BUTTON_VARIANTS.OPERATION}>
          {render}
        </Button>
      ))}
    </div>
  );
};

export default Operation;
