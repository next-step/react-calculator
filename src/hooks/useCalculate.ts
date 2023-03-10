import { useState } from "react";
import { CalculationMessage } from "../Constants/ErrorMessage";
import { calculate } from "../Utils/Numeric";

interface Operand {
    operands: string[],
    isWriting: boolean
}

export const useCalculate = () => {
    const MAX_LEN = 3;

    const [operand, setOperand] = useState<Operand>({ operands: [], isWriting: false });
    const [operator, setOperator] = useState<string>('');

    const onDigitClick = (value: string) => {
        const { operands, isWriting } = operand;

        if (isWriting) {
            const lastNumber = operands[operands.length - 1];

            if (lastNumber.length === MAX_LEN) {
                alert(CalculationMessage.MAX_DIGIT_LENGTH);
                return;
            }

            const newNumber = lastNumber + value;

            setOperand((prev) => ({ ...prev, operands: [...prev.operands.slice(0, prev.operands.length - 1), newNumber] }));
            return;
        }

        setOperand((prev) => ({ operands: [...prev.operands, value], isWriting: true, }));
    }

    const onOperatorClick = (value: string) => {
        if (operator) {
            alert(CalculationMessage.CANT_ADD_OPERATION);
            return;
        }

        setOperator((prev) => (value));
        setOperand((prev) => ({...prev, isWriting: false}))
    }

    const onAllClearClick = () => {
        setOperand({ operands: [], isWriting: false });
        setOperator('');
    }

    const onClickEqual = () => {
        const result = calculate(makeExpression());

        setOperand((prev) => ({ operands: [result], isWriting: false }));
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