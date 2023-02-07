import { ReactNode, useReducer } from 'react';
import { calculatorReducer, initialState } from '@/store/calculatorReducer';
import Validator from '@/core/Validator';
import { MESSAGE, OPERATOR } from '@/constants';
import Calculator from '@/domain/Calculator';
import { CalculatorContext } from '@/store/CalculatorContext';

export default function CalculatorProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(calculatorReducer, initialState);

    const insertDigits = (digits) => {
        const updateDigits = state + digits;

        if (!Validator.isOverMaxDigitLength(updateDigits)) {
            alert(MESSAGE.MAX_DIGIT_LENGTH);
            return;
        }

        dispatch({ type: 'insertDigits', payload: digits });
    };

    const insertOperation = (operator) => {
        if (state === '0') {
            return;
        }

        if (Validator.isMaxOperatorLength(state + operator)) {
            alert(MESSAGE.MAX_OPERATOR_LENGTH);
            return;
        }

        dispatch({ type: 'insertOperation', payload: operator });
    };

    const setAnswer = () => {
        const getOperator = state.split('').find((item) => OPERATOR.includes(item));

        if (!Validator.isOverMaxDigitLength(state) || !getOperator) {
            return;
        }

        const item = new Calculator(
            getOperator,
            state.split(getOperator).map((item) => Number(item))
        );

        dispatch({ type: 'setAnswer', payload: item.result() });
    };

    const resetCalculator = () => dispatch({ type: 'resetCalculator' });

    return (
        <CalculatorContext.Provider
            value={{
                insertDigits,
                insertOperation,
                setAnswer,
                resetCalculator,
                state
            }}
        >
            {children}
        </CalculatorContext.Provider>
    );
}