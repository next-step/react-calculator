import { IModifiersProps } from "../../types/allProps";

function Modifiers({ allClearHandler }: IModifiersProps) {
  return (
    <div className="modifiers subgrid">
      <button onClick={() => allClearHandler("")} className="modifier">
        AC
      </button>
    </div>
  );
}

export default Modifiers;
