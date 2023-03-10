import { useState } from "react";
import { CalculationMessage } from "../Constants/ErrorMessage";
import { calculate } from "../Utils/Numeric";

interface Operand {
    operands: string[],
    index: number
}

export const useCalculate = () => {
    const MAX_LEN = 3;

    const [operand, setOperand] = useState<Operand>({ operands: ['0', ''], index: 0 });
    const [operator, setOperator] = useState<string>('');

    const onDigitClick = (value: string) => {
        const { operands, index } = operand;
        const lastNumber = operands[index];
        const newNumber = lastNumber === '0' ? value : lastNumber + value;

        if (lastNumber.length === MAX_LEN) {
            alert(CalculationMessage.MAX_DIGIT_LENGTH);
            return;
        }

        setOperand((prev) => ({
            ...prev, operands: prev.operands.map((number, idx) => {
                if (idx === index) {
                    return newNumber;
                }

                return number;
            })
        }));
    }

    const onOperatorClick = (value: string) => {
        if (operator) {
            alert(CalculationMessage.CANT_ADD_OPERATION);
            return;
        }

        setOperator((prev) => (value));
        setOperand((prev) => ({...prev, index: prev.index + 1}))
    }

    const onAllClearClick = () => {
        setOperand({ operands: ['0', ''], index: 0 });
        setOperator('');
    }

    const onClickEqual = () => {
        const result = calculate(makeExpression());

        setOperand((prev) => ({ operands: [result, ''], index: 0 }));
        setOperator('');
    }

    const makeExpression = () => {
        const { operands } = operand;
        return (operands[0] ?? '') + (operator ?? '') + (operands[1] ?? '');
    }

    return {
        expression: makeExpression(),
        onOperatorClick,
        onAllClearClick,
        onDigitClick,
        onClickEqual
    }
}