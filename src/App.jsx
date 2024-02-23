/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Button from './components/Button';

function App() {
    const [firstNumber, setFirstNumber] = useState('');
    const [operation, setOperation] = useState('');
    const [secondNumber, setSecondNumber] = useState('');

    const displayResult = firstNumber + operation + secondNumber || '';

    return (
        <div id="app">
            <div className="calculator">
                <div id="total">{displayResult}</div>

                <div className="subgrid modifiers">
                    <button>AC</button>
                </div>

                <div className="subgrid operations">
                    <button>/</button>
                    <button>X</button>
                    <button>+</button>
                    <button>-</button>
                    <button>=</button>
                </div>

                <div className="digits">
                    <Button value={9} />
                    <button className="">8</button>
                    <button className="">7</button>
                    <button className="">6</button>
                    <button className="">5</button>
                    <button className="">4</button>
                    <button className="">3</button>
                    <button className="">2</button>
                    <button className="">1</button>
                    <button className="">0</button>
                </div>
            </div>
        </div>
    );
}

export default App;
