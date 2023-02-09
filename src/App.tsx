import React, { useState } from 'react';
import './css/index.css';

import Digits from './components/Digits';
import Operations from './components/Operations';

const OPERATORS = ['/', 'X', '-', '+', '='];

const excute = {
  '+': (a: number, b: number) => a + b,
  '-': (a: number, b: number) => a - b,
  X: (a: number, b: number) => a * b,
  '/': (a: number, b: number) => ~~(a / b),
};
type ExecuteType = keyof typeof excute;

function App() {
  const [total, setTotal] = useState('');

  const onDigitClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const lastInput = total.match(/\d+|[+\-/X]/g)?.pop();
    if (lastInput && lastInput?.length >= 3) {
      alert('숫자는 세 자리까지만 입력 가능합니다!');
      return;
    }
    const { textContent } = e.target as HTMLButtonElement;
    setTotal((prev) => prev + textContent);
  };

  const onOperationClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (OPERATORS.includes(total.slice(-1))) {
      alert('숫자를 먼저 입력한 후 연산자를 입력해주세요!');
      return;
    }
    const { textContent } = e.target as HTMLButtonElement;
    if (textContent === '=') {
      const token = total.match(/\d+|[+\-/X]/g);
      const [a, operator, b] = token!;
      const result = excute[operator as ExecuteType](Number(a), Number(b));
      setTotal(`${result}`);
      return;
    }

    setTotal((prev) => prev + textContent);
  };

  return (
    <div className="calculator">
      <h1 id="total">{total || '0'}</h1>
      <Digits onDigitClick={onDigitClick} />
      <div className="modifiers subgrid">
        <button className="modifier" onClick={() => setTotal('')}>
          AC
        </button>
      </div>
      <Operations onOperationClick={onOperationClick} />
    </div>
  );
}

export default App;
