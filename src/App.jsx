import './css/index.css';
import { useEffect, useState } from 'react';
import Digit from './components/button/Digit';
import Modifier from './components/button/Modifier';
import Operator from './components/button/Operator';
import useCalculation from './hooks/useCalculation';
import {
  MAX_CALCULABLE_NUMBER_COUNT,
  MAX_DIGITS,
} from './constants/constraints';
import {
  MSG_WARNING_INPUT_ORDER,
  MSG_WARNING_INPUT_MAX_DIGITS,
  MSG_ERROR_RESULT,
} from './constants/messages';

const ZERO = '0';

function App() {
  const [resultNumber, setResultNumber] = useState(ZERO);
  const [operator, setOperator] = useState(null);
  const { result, count, calculate } = useCalculation();

  useEffect(() => {
    setResultNumber(result);
    setOperator(null);
  }, [result, count]);

  const [firstOperand, secondOperand] = resultNumber.split(operator);
  const initialState = resultNumber === ZERO;
  const errorState = resultNumber === MSG_ERROR_RESULT;
  const hasOperator = !!operator;

  const onClickModifier = () => {
    setOperator(null);
    setResultNumber(ZERO);
  };

  const onClickDigit = (value) => {
    if (initialState && value === 0) {
      return;
    }

    if (
      (!hasOperator && resultNumber.length >= MAX_DIGITS)
      || (firstOperand.length >= MAX_CALCULABLE_NUMBER_COUNT
        && secondOperand?.length >= MAX_DIGITS)
    ) {
      alert(MSG_WARNING_INPUT_MAX_DIGITS);
      return;
    }

    if (errorState) {
      setResultNumber(`${value}`);
      return;
    }

    if (initialState) {
      setResultNumber(`${value}`);
    } else {
      setResultNumber(`${resultNumber}${value}`);
    }
  };

  function isEqualOperator(value) {
    return value === '=';
  }

  const onClickOperator = (value) => {
    if (initialState) {
      alert(MSG_WARNING_INPUT_ORDER);
      return;
    }

    if ((hasOperator && secondOperand.length >= MAX_DIGITS) && !isEqualOperator(value)) {
      return;
    }

    // 결과값이 3자리 이상일 때 연산자를 입력하는 경우
    if (!hasOperator && resultNumber.length > MAX_DIGITS) {
      alert(MSG_WARNING_INPUT_MAX_DIGITS);
      return;
    }

    if (isEqualOperator(value)) {
      calculate([firstOperand, secondOperand], operator);
      return;
    }

    if (errorState) {
      alert(MSG_WARNING_INPUT_ORDER);
      return;
    }

    // 연산자가 연달아 입력되는 경우 마지막 연산자로 설정
    setOperator(value);
    if (hasOperator && !secondOperand) {
      setResultNumber(resultNumber.slice(0, -1) + value);
    } else {
      setResultNumber(`${resultNumber}${value}`);
    }
  };

  return (
    <div id="app">
      <div className="calculator">
        <h1 id="total">{resultNumber}</h1>
        <div className="digits flex">
          <Digit onClick={onClickDigit} />
        </div>
        <div className="modifiers subgrid">
          <Modifier onClick={onClickModifier} />
        </div>
        <div className="operations subgrid">
          <Operator onClick={onClickOperator} />
        </div>
      </div>
    </div>
  );
}

export default App;
