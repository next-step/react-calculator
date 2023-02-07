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


    // 1.  들어오는 DigitInput에따라 resultInput 결과를 처리한다 .
    const handleDigitInput = (e: React.MouseEvent<HTMLButtonElement>) => {
        
        // 1.1 숫자 유효성 체크
        const currentDigitNumber = parseInt(
            digitInput + e.currentTarget.value
        ).toString(); //000입력되는거 방지

        if (currentDigitNumber.length > 3) {
            alert('숫자는 최대 3자리까지 입력가능합니다.');
            return;
        }

        // 1.2 OperationInput 존재에 따라 ResultInput을 보여줄지 처리
        if (!operationInput.length) { //operation이 존재 안하면 현재 숫자만 보여주면됨        
            setResultInput(currentDigitNumber);
            // Operator 이전 숫자를 저장하기 위해 사용
            setOperatorPrevNumber(currentDigitNumber);
        } else {
            // 2. opeartion 존재할시 
            //operation 이전에 있는 숫자 (operatorPrevNumber) + 현재 currentDigitNumber = resultINput
            const currentResultInput =
                operatorPrevNumber + operationInput + currentDigitNumber;
            setResultInput(currentResultInput);
        }
        // 현재입력된 DigitInput갱신
        setDigitInput(currentDigitNumber);
    };

    // 2. OperationInput이 들어올경우처리하는 함수
    //  OperationInput이 처음 생길때와 존재하지 않을때에 따라서 처리하는 방식을 나눔
    const handleOperationInput = (e: React.MouseEvent<HTMLButtonElement>) => {
        const currentOperation = e.currentTarget.value; //현재 operation
        if (operationInput.length) {  // operationInput이 존재할떄
            if (isValidOperationInput(currentOperation)) return; // = 이 아니면 operation못들가게
            const result = caculateResultInput(resultInput).toString(); // resultInput계산
            // UI에 보여주기
            setResultInput(result);
            setOperatorPrevNumber(result);
            setOperationInput('');
            setDigitInput('');
        } else {
            // operationInput이 처음생길떄 처리
            if (!isValidOperationInput(currentOperation)) return; // = 이면 Operation에 못들어가게 (숫자는 하나만존재하므로)
            if (!isValidResultInput(parseInt(resultInput))) return; // 올바른 resultInput인지 유무 체크
            // 지금 까지의 resultInput + currentOpertion
            setOperationInput(currentOperation);
            setResultInput(resultInput + currentOperation);
            setDigitInput('');
        }
    };
    // 3. AC를 눌렀을때 처리
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
