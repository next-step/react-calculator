import { useState } from 'react';

import { DigitNumbers } from './DigitNumbers';
import { Modifier } from './Modifier';
import { Operations } from './Operations';

function App() {
  const historyStateBundle = useState(0);
  const isNeedInitStateBundle = useState(false);
  const currentNumberStateBundle = useState('');
  const currentOperationStateBundle = useState('');

  const [_, setHistory] = historyStateBundle;
  const [_2, setIsNeedInit] = isNeedInitStateBundle;
  const [_3, setCurrentOperation] = currentOperationStateBundle;
  const [currentNumber, setCurrentNumber] = currentNumberStateBundle;

  return (
    <div id="app">
      <div className='calculator'>
        <h1 id='total'>{currentNumber || '0'}</h1>
        <DigitNumbers
          isNeedInitStateBundle={isNeedInitStateBundle}
          currentNumberStateBundle={currentNumberStateBundle}
        />
        <Modifier initStates={() => {
          setHistory(0);
          setIsNeedInit(false);
          setCurrentNumber('');
          setCurrentOperation('');
        }} />
        <Operations
          historyStateBundle={historyStateBundle}
          isNeedInitStateBundle={isNeedInitStateBundle}
          currentNumberStateBundle={currentNumberStateBundle}
          currentOperationStateBundle={currentOperationStateBundle}
        />
      </div>
    </div>
  );
}

export default App;
