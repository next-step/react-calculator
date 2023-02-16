import './index.css';
import React from 'react';
import { Result } from '../../components/Calculator/Result';
import { Digit } from '../../components/Calculator/Digit';
import { Modifier } from '../../components/Calculator/Modifier';
import { Operation } from '../../components/Calculator/Operation';

import { useCalculator } from '../../hooks/useCalculator';

export const App = () => {
  // 비즈니스 로직은 커스텀훅으로 뺌
  const { result, insertDigit, clear, operate } = useCalculator();

  return (
    <div className="calculator">
      <Result value={result} />
      <Digit handleClick={insertDigit} />
      <Modifier handleClick={clear} />
      <Operation handleClick={operate} />
    </div>
  );
};
export default App;
