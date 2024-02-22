import Button from "../button/Button";
import { BUTTON_VARIANTS } from "../button/Button.type";

const MAX_NUM = 9;
const Digit = () => {
  return (
    <div className="digits flex">
      {new Array(10).fill(0).map((_, index) => (
        <Button variant={BUTTON_VARIANTS.DIGIT}>{MAX_NUM - index}</Button>
      ))}
    </div>
  );
};

export default Digit;
