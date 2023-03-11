interface ModifierProps {
  clear(): void;
}

function ModifierButton({ clear }: ModifierProps) {
  return (
    <div className="modifiers subgrid">
      <button className="modifier" onClick={clear}>AC</button>
    </div>
  )
}

export default ModifierButton;