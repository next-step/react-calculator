import React from 'react';

type ModifierProps = {
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Modifier = ({ handleClick }: ModifierProps) => {
    return (
        <div className="modifiers subgrid">
            <button onClick={handleClick} className="modifier">
                AC
            </button>
        </div>
    );
};
export default Modifier;
