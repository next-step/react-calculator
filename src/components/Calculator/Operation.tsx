import React from 'react';

type OperationProps = {
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
};
export const Operation = ({ handleClick }: OperationProps) => {
    const opertaionButton=['/','X','-','+','=']
    const renderButton=opertaionButton.map((opeartion)=><button value={opeartion} key={opeartion} onClick={handleClick}>{opeartion}</button>)
    return (
        <div className="operations subgrid">
           {renderButton}
        </div>
    );
};
export default Operation;
