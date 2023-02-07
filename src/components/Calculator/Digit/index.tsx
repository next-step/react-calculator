import React from 'react';

// 버튼을 눌르면 Total Component가 업데이트
type DigitProps = {
    onDigitInputHandler: React.MouseEventHandler<HTMLButtonElement>;
};

export const Digit = ({ onDigitInputHandler }: DigitProps) => {
    return (
        <div className="digits flex">
            <button onClick={onDigitInputHandler} value="9">
                9
            </button>
            <button onClick={onDigitInputHandler} value="8">
                8
            </button>
            <button onClick={onDigitInputHandler} value="7">
                7
            </button>
            <button onClick={onDigitInputHandler} value="6">
                6
            </button>
            <button onClick={onDigitInputHandler} value="5">
                5
            </button>
            <button onClick={onDigitInputHandler} value="4">
                4
            </button>
            <button onClick={onDigitInputHandler} value="3">
                3
            </button>
            <button onClick={onDigitInputHandler} value="2">
                2
            </button>
            <button onClick={onDigitInputHandler} value="1">
                1
            </button>
            <button onClick={onDigitInputHandler} value="0">
                0
            </button>
        </div>
    );
};

export default Digit;
