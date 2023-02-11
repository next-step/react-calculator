import React from 'react';

// 버튼을 눌르면 Total Component가 업데이트
type DigitProps = {
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Digit = ({ handleClick }: DigitProps) => {
    const digitButtons=[0,1,2,3,4,5,6,7,8,9].reverse()
    const renderButton=digitButtons.map((number)=><button value={number} key={number} onClick={handleClick}>{number}</button>)

    return (
        <div className="digits flex">
            {renderButton}
        </div>
    );
};

export default Digit;
