import { ReactNode } from "react";
import Button from "../button/Button";
import { BUTTON_VARIANTS } from "../button/Button.type";
import { OperationType } from "./Opertaiton.type";

const OPERATION_BUTTON_LIST: { render: ReactNode; type: OperationType }[] = [
  { render: "/", type: "divide" },
  { render: "X", type: "multiple" },
  { render: "-", type: "subtract" },
  { render: "+", type: "add" },
  { render: "=", type: "equal" },
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
