import React from 'react';

interface ModifierProps {
  initStates: () => void;
}

function Modifier({
  initStates,
}: ModifierProps) {
  return (
    <div className='modifiers subgrid'>
      <button className='modifier' onClick={() => {
        initStates();
      }}>
        AC
      </button>
    </div>
  );
}

export { Modifier };
