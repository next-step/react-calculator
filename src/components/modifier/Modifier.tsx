import Button from "../button/Button";
import { BUTTON_VARIANTS } from "../button/Button.type";

const Modifier = () => {
  return (
    <div className="modifiers subgrid">
      <Button variant={BUTTON_VARIANTS.MODIFIER}>AC</Button>
    </div>
  );
};

export default Modifier;
