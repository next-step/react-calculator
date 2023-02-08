type ModifierProps = {
  handleModifier: () => void;
};

function Modifier({ handleModifier }: ModifierProps) {
  return (
    <div className="modifiers subgrid">
      <button className="modifier" onClick={handleModifier}>
        AC
      </button>
    </div>
  );
}

export default Modifier;
