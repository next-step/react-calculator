import React from 'react';

type OperationProps = {
    onOperationInputHandler: React.MouseEventHandler<HTMLButtonElement>;
};
export const Operation = ({ onOperationInputHandler }: OperationProps) => {
    return (
        <div className="operations subgrid">
            <button
                className="operation"
                value="/"
                onClick={onOperationInputHandler}
            >
                /
            </button>
            <button
                className="operation"
                value="X"
                onClick={onOperationInputHandler}
            >
                X
            </button>
            <button
                className="operation"
                value="-"
                onClick={onOperationInputHandler}
            >
                -
            </button>
            <button
                className="operation"
                value="+"
                onClick={onOperationInputHandler}
            >
                +
            </button>
            <button
                className="operation"
                value="="
                onClick={onOperationInputHandler}
            >
                =
            </button>
        </div>
    );
};
export default Operation;
