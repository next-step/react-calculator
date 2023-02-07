import React from 'react';

type ModifierProps = {
    onModifierHandler: React.MouseEventHandler<HTMLButtonElement>;
};

export const Modifier = ({ onModifierHandler }: ModifierProps) => {
    return (
        <div className="modifiers subgrid">
            <button onClick={onModifierHandler} className="modifier">
                AC
            </button>
        </div>
    );
};
export default Modifier;
