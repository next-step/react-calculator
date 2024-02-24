/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Calculator } from './util/Calculator';
import DigitButton from './components/DigitButton';
import OperationButton from './components/OperationButton';

function App() {
    const [firstNumber, setFirstNumber] = useState('');
    const [operationType, setOperationType] = useState('');
    const [secondNumber, setSecondNumber] = useState('');

    const calculator = new Calculator();

    const onClickEqualOperationButton = () => {
        if (operationType === '') {
            return;
        }
        const num1 = Number(firstNumber);
        const num2 = Number(secondNumber);
        const calculateResult = (() => {
            switch (operationType) {
                case '+':
                    return calculator.sum(num1, num2);
                case '-':
                    return calculator.substract(num1, num2);
                case 'X':
                    return calculator.multiple(num1, num2);
                case '/':
                    return calculator.divide(num1, num2);
            }
        })();

        setFirstNumber(calculateResult === Infinity ? '오류' : String(calculateResult));

        setOperationType('');
        setSecondNumber('');
    };

    const initalize = () => {
        setFirstNumber('');
        setOperationType('');
        setSecondNumber('');
    };

    const display = firstNumber + operationType + secondNumber || '0';

    return (
        <div id="app">
            <div className="calculator">
                <div id="total">{display}</div>

                <div className="subgrid modifiers">
                    <button onClick={initalize}>AC</button>
                </div>

                <div className="subgrid operations">
                    {['/', 'X', '+', '-'].map((value) => {
                        return <OperationButton key={value} operationName={value} firstNumber={firstNumber} setOperationType={setOperationType} />;
                    })}
                    <button value="=" onClick={onClickEqualOperationButton}>
                        =
                    </button>
                </div>

                <div className="digits">
                    {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((number) => {
                        return <DigitButton key={number} value={number} firstNumber={firstNumber} setFirstNumber={setFirstNumber} operationType={operationType} secondNumber={secondNumber} setSecondNumber={setSecondNumber} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
