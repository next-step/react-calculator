/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Calculator } from './util/Calculator';
import DigitButton from './components/DigitButton';
import OperationButton from './components/OperationButton';

function App() {
    const [firstNumber, setFirstNumber] = useState('');
    const [operationType, setOperationType] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const getCalculateResult = (num1, num2) => {
        let result = '';
        switch (operationType) {
            case '+':
                result = Calculator.sum(num1, num2);
                break;
            case '-':
                result = Calculator.substract(num1, num2);
                break;
            case 'X':
                result = Calculator.multiple(num1, num2);
                break;
            case '/':
                result = Calculator.divide(num1, num2);
                break;
        }

        if (result === Infinity) {
            return '오류';
        }

        return String(result);
    };

    const onClickEqualOperationButton = () => {
        // 아직 연산자 입력 안됨
        const noOperationInput = operationType === '';
        if (noOperationInput) {
            return;
        }
        const num1 = Number(firstNumber);
        const num2 = Number(secondNumber);

        const calculateResult = getCalculateResult(num1, num2);

        setFirstNumber(calculateResult);
        setOperationType('');
        setSecondNumber('');
    };

    const resetState = () => {
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
                    <button onClick={resetState}>AC</button>
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
