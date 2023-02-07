import { useState } from 'react';
import {
    caculateResultInput,
    isValidOperationInput,
    isValidResultInput,
} from '../utils';

export const useCalculator = () => {
    const [digitInput, setDigitInput] = useState<string>('');
    const [operationInput, setOperationInput] = useState<string>('');
    const [resultInput, setResultInput] = useState<string>('0');
    const [operatorPrevNumber, setOperatorPrevNumber] = useState<string>('');

    const handleDigitInput = (e: React.MouseEvent<HTMLButtonElement>) => {
        const currentDigitNumber = parseInt(
            digitInput + e.currentTarget.value
        ).toString(); //000나오는거 예외처리

        if (currentDigitNumber.length > 3) {
            alert('숫자는 최대 3자리까지 입력가능합니다.');
            return;
        }
        if (!operationInput.length) {
            //1. operation이 존재 안하면 현재 숫자만 보여주면됨
            setResultInput(currentDigitNumber);
            // Operator 이전 숫자를 저장하기 위해 사용
            setOperatorPrevNumber(currentDigitNumber);
        } else {
            // 2. opeartion 존재시
            //operation 이전에 있는 숫자 (operatorPrevNumber) + 현재 currentDigitNumber
            const currentResultInput =
                operatorPrevNumber + operationInput + currentDigitNumber;
            setResultInput(currentResultInput);
        }
        // 현재입력된 DigitInput갱신
        setDigitInput(currentDigitNumber);
    };
    const handleOperationInput = (e: React.MouseEvent<HTMLButtonElement>) => {
        const currentOperation = e.currentTarget.value; //현재 operation
        if (operationInput.length) {
            // operationInput이 존재할떄
            if (isValidOperationInput(currentOperation)) return;
            const result = caculateResultInput(resultInput).toString();
            setResultInput(result);
            setOperatorPrevNumber(result);
            setOperationInput('');
            setDigitInput('');
        } else {
            // operationInput이 처음생길떄 처리
            if (!isValidOperationInput(currentOperation)) return;
            if (!isValidResultInput(parseInt(resultInput))) return;
            // 지금 까지의 resultInput + currentOpertion
            setOperationInput(currentOperation);
            setResultInput(resultInput + currentOperation);
            setDigitInput('');
        }
    };
    const handleModifierButton = () => {
        setResultInput('0');
        setDigitInput('');
        setOperationInput('');
        setOperatorPrevNumber('');
    };

    return {
        handleDigitInput,
        handleOperationInput,
        handleModifierButton,
        resultInput,
    };
};
