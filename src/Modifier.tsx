import React from 'react';

interface ModifierProps {
  reset: () => void;
}

function Modifier({
  reset,
}: ModifierProps) {
  return (
    <div className='modifiers subgrid'>
      <button className='modifier' onClick={() => {
        reset();
      }}>
        AC
      </button>
    </div>
  );
}

export { Modifier };
