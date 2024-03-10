import React, {useState} from "react";
import {CalculatorContext} from "../context/calculatorContext.ts";
import {OperationType} from "../type/enum/operationType.ts";
import {DisplayInterface} from "../type/interface/displayInterface.ts";

interface Props {

}

const CalculatorProvider: React.FC<React.PropsWithChildren<Props>> = ({children}) => {
    const [display, setDisplay] = useState<DisplayInterface>({
        prev: '',
        operation: OperationType.RESULT,
        after: ''
    })
    const validateDigitLength = (digit: string) => {
        if (digit.length > 3) {
            alert('숫자는 한번에 최대 3자리 수까지 입력 가능합니다.');
            return true;
        }
        return false;
    }
    const onClickDigit = (digit: string) => {
        if (display.operation === OperationType.RESULT) {
            if (validateDigitLength(display.prev + digit)) {
                return;
            }
            setDisplay({
                prev: display.prev + digit,
                operation: display.operation,
                after: display.after
            })
            return;
        }

        if (validateDigitLength(display.after + digit)) {
            return;
        }

        setDisplay({
            prev: display.prev,
            operation: display.operation,
            after: display.after + digit
        })
    }

    const onClickAllClear = () => {
        setDisplay({
            prev: '',
            operation: OperationType.RESULT,
            after: ''
        })
    }

    const calculatePreprocessing = (num: number) => {
        if (num === 0) return '';
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
        switch (operation) {
            case OperationType.RESULT:
                handleResult();
                return;
            case OperationType.DIVISION:
            case OperationType.MULTIPLICATION:
            case OperationType.SUBTRACTION:
            case OperationType.ADDITION:
            default:
                setDisplay({
                    prev: display.prev,
                    operation: operation,
                    after: display.after
                })
                return;
        }
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