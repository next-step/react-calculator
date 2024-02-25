import { CALCULATOR } from "data/constant";

interface ModifyButtonProps {
  onResetClick: () => void;
}

export default function ModifyButton({ onResetClick }: ModifyButtonProps) {
  return (
    <div className="modifiers subgrid">
      <button className="modifier" onClick={onResetClick}>
        {CALCULATOR.RESET}
      </button>
    </div>
  );
}
