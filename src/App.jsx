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

function App() {
  const [resultNumber, setResultNumber] = useState('');
  const [allClear, setAllClear] = useState(true);
  const [operator, setOperator] = useState(null);
  const { result, count, calculate } = useCalculation();

  useEffect(() => {
    setResultNumber(result);
    setOperator(null);
  }, [result, count]);

  const onClickModifier = () => {
    setAllClear(true);
    setOperator(null);
    setResultNumber('');
  };

  const onClickDigit = (value) => {
    const operand = resultNumber.split(operator);

    // 처음에 0이 입력된 경우
    if (resultNumber === '') {
      if (value === 0) {
        return;
      }
    }

    if (
      (!operator && resultNumber.length >= MAX_DIGITS)
      || (operand.length >= MAX_CALCULABLE_NUMBER_COUNT
        && operand[1].length >= MAX_DIGITS)
    ) {
      alert(MSG_WARNING_INPUT_MAX_DIGITS);
      return;
    }

    if (resultNumber === MSG_ERROR_RESULT) {
      setResultNumber(`${value}`);
      return;
    }

    setResultNumber(`${resultNumber}${value}`);
    setAllClear(false);
  };

  const onClickOperator = (value) => {
    const operand = resultNumber.split(operator);

    // 처음에 연산자가 입력된 경우
    if (resultNumber === '') {
      alert(MSG_WARNING_INPUT_ORDER);
      return;
    }

    // 결과값이 3자리 이상일 때 연산자를 입력하는 경우
    if (!operator && resultNumber.length > MAX_DIGITS) {
      alert(MSG_WARNING_INPUT_MAX_DIGITS);
      return;
    }

    if (value === '=') {
      calculate(operand, operator);
      return;
    }

    if (resultNumber === MSG_ERROR_RESULT) {
      alert(MSG_WARNING_INPUT_ORDER);
      return;
    }

    // 연산자가 연달아 입력되는 경우 마지막 연산자로 세팅
    setOperator(value);
    if (operator && !operand[1]) {
      setResultNumber(resultNumber.slice(0, -1) + value);
    } else {
      setResultNumber(`${resultNumber}${value}`);
    }

    setAllClear(false);
  };

  return (
    <div id="app">
      <div className="calculator">
        <h1 id="total">{allClear ? 0 : resultNumber}</h1>
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
