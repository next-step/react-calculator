import './App.css';
import { useEffect, useState } from 'react';
import Digit from './components/button/Digit';
import Modifier from './components/button/Modifier';
import Operator from './components/button/Operator';
import useCalculation from './hooks/useCalculation';

function App() {
  const [display, setDisplay] = useState('');
  const [allClear, setAllClear] = useState(true);
  const [operator, setOperator] = useState(null);
  const { result, calculate } = useCalculation();

  useEffect(() => {
    setDisplay(result);
    setOperator(null);
  }, [result]);

  const onClick = (value, type) => {
    // AC버튼 클릭
    if (type === 'modifier') {
      setAllClear(true);
      setOperator(null);
      setDisplay('');
      return;
    }

    const operand = display.split(operator);
    // 숫자버튼 클릭
    if (type === 'digit') {
      // 처음에 0이 입력된 경우
      if (display === '') {
        if (value === 0) {
          return;
        }
      }

      if (
        (!operator && display.length >= 3)
        || (operand.length >= 2 && operand[1].length >= 3)
      ) {
        alert('숫자는 세 자리까지만 입력 가능합니다!');
        return;
      }

      setDisplay(`${display}${value}`);
    }

    // 연산자 버튼 클릭
    if (type === 'operator') {
      // 처음에 연산자가 입력된 경우
      if (display === '') {
        alert('숫자를 먼저 입력한 후 연산자를 입력해주세요!');
        return;
      }

      // 결과값이 3자리 이상일 때 연산자를 입력하는 경우
      if (!operator && display.length > 3) {
        alert('숫자는 세 자리까지만 입력 가능합니다!');
        return;
      }

      if (value === '=') {
        calculate(operand, operator);
        return;
      }

      // 연산자가 연달아 입력되는 경우 마지막 연산자로 세팅
      setOperator(value);
      if (operator && !operand[1]) {
        setDisplay(display.slice(0, -1) + value);
      } else {
        setDisplay(`${display}${value}`);
      }
    }

    setAllClear(false);
  };

  return (
    <div id="app">
      <div className="calculator">
        <h1 id="total">{allClear ? 0 : display}</h1>
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
