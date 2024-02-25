import './css/index.css';
import { useEffect, useState } from 'react';
import Digit from './components/button/Digit';
import Modifier from './components/button/Modifier';
import Operator from './components/button/Operator';
import useCalculation from './hooks/useCalculation';

function App() {
  const [resultNumber, setResultNumber] = useState('');
  const [allClear, setAllClear] = useState(true);
  const [operator, setOperator] = useState(null);
  const { result, count, calculate } = useCalculation();

  useEffect(() => {
    setResultNumber(result);
    setOperator(null);
  }, [result, count]);

  const onClick = (value, type) => {
    // AC버튼 클릭
    if (type === 'modifier') {
      setAllClear(true);
      setOperator(null);
      setResultNumber('');
      return;
    }

    const operand = resultNumber.split(operator);
    // 숫자버튼 클릭
    if (type === 'digit') {
      // 처음에 0이 입력된 경우
      if (resultNumber === '') {
        if (value === 0) {
          return;
        }
      }

      if (
        (!operator && resultNumber.length >= 3)
        || (operand.length >= 2 && operand[1].length >= 3)
      ) {
        alert('숫자는 세 자리까지만 입력 가능합니다!');
        return;
      }

      // 결과가 오류일 경우
      if (resultNumber === '오류') {
        setResultNumber(`${value}`);
        return;
      }

      setResultNumber(`${resultNumber}${value}`);
    }

    // 연산자 버튼 클릭
    if (type === 'operator') {
      // 처음에 연산자가 입력된 경우
      if (resultNumber === '') {
        alert('숫자를 먼저 입력한 후 연산자를 입력해주세요!');
        return;
      }

      // 결과값이 3자리 이상일 때 연산자를 입력하는 경우
      if (!operator && resultNumber.length > 3) {
        alert('숫자는 세 자리까지만 입력 가능합니다!');
        return;
      }

      if (value === '=') {
        calculate(operand, operator);
        return;
      }

      // 결과가 오류일 경우
      if (resultNumber === '오류') {
        alert('숫자를 먼저 입력한 후 연산자를 입력해주세요!');
        return;
      }

      // 연산자가 연달아 입력되는 경우 마지막 연산자로 세팅
      setOperator(value);
      if (operator && !operand[1]) {
        setResultNumber(resultNumber.slice(0, -1) + value);
      } else {
        setResultNumber(`${resultNumber}${value}`);
      }
    }

    setAllClear(false);
  };

  return (
    <div id="app">
      <div className="calculator">
        <h1 id="total">{allClear ? 0 : resultNumber}</h1>
        <div className="digits flex">
          <Digit onClick={onClick} />
        </div>
        <div className="modifiers subgrid">
          <Modifier onClick={onClick} />
        </div>
        <div className="operations subgrid">
          <Operator onClick={onClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
