import React from 'react';

export default function AllClear({
  resetCalculator,
}: {
  resetCalculator: () => void;
}) {
  return (
    <div className="modifiers subgrid">
      <button onClick={resetCalculator}>AC</button>
    </div>
  );
}
