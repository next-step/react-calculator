import React from 'react';

function Modifier({ handleModifier }: { handleModifier: () => void }) {
  return (
    <div className="modifiers subgrid">
      <button className="modifier" onClick={handleModifier}>
        AC
      </button>
    </div>
  );
}

export default Modifier;
