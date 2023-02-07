import React, { useState } from 'react';
import './index.css';
import { Result } from '../../components/Calculator/Result/index';
import { Digit } from '../../components/Calculator/Digit/index';
import { Modifier } from '../../components/Calculator/Modifier/index';
import { Operation } from '../../components/Calculator/Operation/index';

import { useCalculator } from '../../hooks/useCalculator';

export const App = () => {
    // 비즈니스 로직은 커스텀훅으로 뻇음 
    const {
        resultInput,
        handleDigitInput,
        handleModifierButton,
        handleOperationInput,
    } = useCalculator();

    return (
        <div className="calculator">
            <Result onResultInput={resultInput} />
            <Digit onDigitInputHandler={handleDigitInput} />
            <Modifier onModifierHandler={handleModifierButton} />
            <Operation onOperationInputHandler={handleOperationInput} />
        </div>
    );
};
export default App;
