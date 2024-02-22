import Button from "../button/Button";
import { BUTTON_VARIANTS } from "../button/Button.type";

const OPERATION = [
  { render: "/", type: "divided" },
  { render: "X", type: "multiple" },
  { render: "-", type: "sub" },
  { render: "+", type: "add" },
  { render: "=", type: "equal" },
];

const Operation = () => {
  return (
    <div className="operations subgrid">
      {OPERATION.map(({ render, type }, i) => (
        <Button key={type + i} variant={BUTTON_VARIANTS.OPERATION}>
          {render}
        </Button>
      ))}
    </div>
  );
};

export default Operation;
