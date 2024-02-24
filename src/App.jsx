/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function App() {
    const [firstNumber, setFirstNumber] = useState('');
    const [operationType, setOperationType] = useState('');
    const [secondNumber, setSecondNumber] = useState('');

    const getValidateNumber = (prevNumber, nowClickNumber) => {
        if (prevNumber.length >= 3) {
            alert('숫자는 세 자리까지만 입력 가능합니다!');
            return prevNumber;
        }

        return String(Number(prevNumber + nowClickNumber));
    };

    const onClickDigitButton = (e) => {
        const nowClickValue = e.target.value;
        if (operationType === '') {
            setFirstNumber(getValidateNumber(firstNumber, nowClickValue));
        } else {
            setSecondNumber(getValidateNumber(secondNumber, nowClickValue));
        }
    };

    const onClickEqualOperationButton = () => {
        const num1 = Number(firstNumber);
        const num2 = Number(secondNumber);
        switch (operationType) {
            case '+':
                setFirstNumber(num1 + num2);
                break;
            case '-':
                setFirstNumber(num1 - num2);
                break;
        }
        setOperationType('');
        setSecondNumber('');
    };

    const onClickOpertaionButton = (e) => {
        const nowOperationType = e.target.value;

        setOperationType(e.target.value);
    };

    const display = firstNumber + operationType + secondNumber || '0';

    return (
        <div id="app">
            <div className="calculator">
                <div id="total">{display}</div>

                <div className="subgrid modifiers">
                    <button>AC</button>
                </div>

                <div className="subgrid operations">
                    {['/', 'X', '+', '-'].map((value) => {
                        return (
                            <button key={value} value={value} onClick={onClickOpertaionButton}>
                                {value}
                            </button>
                        );
                    })}
                    <button value="=" onClick={onClickEqualOperationButton}>
                        =
                    </button>
                </div>

                <div className="digits">
                    {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((number) => {
                        return (
                            <button key={number} value={number} onClick={onClickDigitButton}>
                                {number}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
