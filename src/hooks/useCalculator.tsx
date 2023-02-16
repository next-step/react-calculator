import { useState } from 'react';
import { isOperator, getCurrentDigits, OperatorType, caculationResult, OperationType } from '../utils';

export const useCalculator = () => {
  const [currentNumber, setCurrentNumber] = useState<number>(0);
  const [operator, setOperator] = useState<OperatorType | null>(null);
  const [result, setResult] = useState<string>('0');
  const [firstNumber, setFirstNumber] = useState<number>(0);

  // 1.  들어오는 Digit에따라 숫자를 설정하고  result컴포넌트에 결과를 보여준다 .
  const insertDigit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentDigitNumber = getCurrentDigits(currentNumber, e.currentTarget.value);
    try {
      if (currentDigitNumber.length > 3) {
        throw new Error('최대 3자리까지 입력가능합니다.');
      }
      setCurrentNumber(parseInt(currentDigitNumber));
      setResult(currentDigitNumber);
    } catch (error: any) {
      const message = error.message as string;
      alert(message);
    }
  };

  // 2. operator가 들어올경우에 기존의 Number값으로 계산한다
  const operate = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentOperation = e.currentTarget.value as OperationType; //현재 operation
    const isFirstNumberNotExist = firstNumber === 0;
    if (isOperator(currentOperation)) {
      if (isFirstNumberNotExist) {
        setFirstNumber(currentNumber); // 연산후 결과를 다시 계산하기위해 필요한 조건문
      }
      setOperator(currentOperation);
      setCurrentNumber(0);
    } else {
      const resultValue = caculationResult(operator, firstNumber, currentNumber);
      setResult(resultValue);
      setFirstNumber(parseInt(resultValue));
      setCurrentNumber(0);
    }
  };
  // 3. AC를 눌렀을때 처리해준다.
  const clear = () => {
    setResult('0');
    setFirstNumber(0);
    setCurrentNumber(0);
    setOperator(null);
  };

  return {
    insertDigit,
    operate,
    clear,
    result,
  };
};
