import { CALCULATOR } from "data/constant";

export default function ModifyButton() {
  return (
    <div className="modifiers subgrid">
      <button className="modifier">{CALCULATOR.MODIFIERS}</button>
    </div>
  );
}
