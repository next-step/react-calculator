import React, {useState} from "react";
import {CalculatorContext} from "../context/calculatorContext.ts";
import {OperationType} from "../type/enum/operationType.ts";
import {DisplayInterface} from "../type/interface/displayInterface.ts";
import {CalculatorNumberType} from "../type/enum/calculatorNumberType.ts";

const CalculatorProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    const [display, setDisplay] = useState<DisplayInterface>({
        prev: CalculatorNumberType.ZERO,
        operation: OperationType.RESULT,
        after: ''
    })
    const DIGIT_MAX_LENGTH: number = 3;

    const validateDigitLength = (digit: string) => {
        if (digit.length > DIGIT_MAX_LENGTH) {
            alert('숫자는 한번에 최대 3자리 수까지 입력 가능합니다.');
            return false;
        }
        return true;
    }

    const onChangePrevNumber = (input: CalculatorNumberType) => {
        if (!validateDigitLength(display.prev + input)) {
            return;
        }

        setDisplay({
            prev: display.prev === CalculatorNumberType.ZERO ? input : display.prev + input,
            operation: display.operation,
            after: display.after
        });
    }

    const onChangeAfterNumber = (input: CalculatorNumberType) => {
        if (!validateDigitLength(display.after + input)) {
            return;
        }

        setDisplay({
            prev: display.prev,
            operation: display.operation,
            after: display.after + input
        });
    }

    const onClickDigit = (input: CalculatorNumberType) => {
        if (display.operation === OperationType.RESULT) {
            onChangePrevNumber(input);
            return;
        }
        onChangeAfterNumber(input);
    }

    const onClickAllClear = () => {
        setDisplay({
            prev: CalculatorNumberType.ZERO,
            operation: OperationType.RESULT,
            after: ''
        })
    }

    const calculatePreprocessing = (num: number) => {
        if (num === Infinity) return '오류';
        return String(Math.floor(num));
    }

    const calculateOperation = (operation: OperationType, value: { prev: number, after: number }) => {
        switch (operation) {
            case OperationType.ADDITION:
                return calculatePreprocessing(value.prev + value.after);
            case OperationType.SUBTRACTION:
                return calculatePreprocessing(value.prev - value.after);
            case OperationType.MULTIPLICATION:
                return calculatePreprocessing(value.prev * value.after);
            case OperationType.DIVISION:
                return calculatePreprocessing(value.prev / value.after);
            default:
                return '';
        }
    }

    const handleResult = () => {
        setDisplay({
            prev: calculateOperation(display.operation, {
                prev: Number(display.prev),
                after: Number(display.after)
            }),
            operation: OperationType.RESULT,
            after: ''
        })
    }

    const onClickOperation = (operation: OperationType) => {
        if (operation === OperationType.RESULT) {
            handleResult();
            return;
        }
        setDisplay({
            prev: display.prev,
            operation: operation,
            after: display.after
        })
        return;
    }

    return (
        <CalculatorContext.Provider
            value={{
                display,
                onClickOperation, onClickAllClear,
                onClickDigit
            }}>
            {children}
        </CalculatorContext.Provider>
    )
}

export default CalculatorProvider;
