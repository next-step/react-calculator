import { MODIFIER } from "@/constant";

interface ModifierProps {
  onClick: () => void;
}
const Modifier = ({ onClick }: ModifierProps) => {
  return (
    <div className="modifiers subgrid">
      <button className="modifier" onClick={onClick}>
        {MODIFIER}
      </button>
    </div>
  );
};

export default Modifier;
