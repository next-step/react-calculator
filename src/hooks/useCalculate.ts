import { useState } from 'react';

const INITIAL_OPERATION = '';
const INITIAL_VALUES = {
  firstValue: '0',
  secondValue: '',
};
export default function useCalculate() {
  const [operation, setOperation] = useState(INITIAL_OPERATION);
  const [values, setValues] = useState(INITIAL_VALUES);

  const handleDigitClick = (digit: number) => {
    if (!operation) {
      if (values.firstValue === '0') {
        setValues((prevState) => ({
          ...prevState,
          firstValue: String(digit),
        }));
      } else {
        if (values.firstValue.length >= 3) {
          alert('숫자는 세 자리까지만 입력 가능합니다!');
          return;
        }
        setValues((prevState) => ({
          ...prevState,
          firstValue: prevState.firstValue + String(digit),
        }));
      }
    } else {
      if (values.secondValue.length >= 3) {
        alert('숫자는 세 자리까지만 입력 가능합니다?');
        return;
      }
      setValues((prevState) => ({
        ...prevState,
        secondValue: prevState.secondValue + String(digit),
      }));
    }
  };

  const handleOperationClick = (clickedOperation: string) => {
    if (clickedOperation === '=') {
      if (!operation) return;

      const total = calculate(operation);
      setValues({
        firstValue: String(total),
        secondValue: '',
      });
      setOperation(INITIAL_OPERATION);
    } else {
      if (values === INITIAL_VALUES) {
        alert('숫자를 먼저 입력한 후 연산자를 입력해 주세요!');
        return;
      }
      setOperation(clickedOperation);
    }
  };

  const calculate = (operation: string) => {
    const { firstValue, secondValue } = values;

    switch (operation) {
      case '/':
        return Math.floor(Number(firstValue) / Number(secondValue));
      case 'X':
        return Number(firstValue) * Number(secondValue);
      case '-':
        return Number(firstValue) - Number(secondValue);
      case '+':
        return Number(firstValue) + Number(secondValue);
      default:
        break;
    }
  };

  const allClear = () => {
    setValues(INITIAL_VALUES);
    setOperation(INITIAL_OPERATION);
  };

  const handleModifierClick = () => {
    allClear();
  };

  return {
    values,
    operation,
    handleDigitClick,
    handleOperationClick,
    handleModifierClick,
  };
}
