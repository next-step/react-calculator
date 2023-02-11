import { useState } from 'react';

import { DigitNumbers } from './DigitNumbers';
import { Modifier } from './Modifier';
import { Operations } from './Operations';

function App() {
  const historyStateBundle = useState(0);
  const [_, setHistory] = historyStateBundle;
  const isNeedInitStateBundle = useState(false)
  const currentOperationStateBundle = useState('')
  const [_2, setCurrentOperation] = currentOperationStateBundle;
  const currentNumberStateBundle = useState('');
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
          setCurrentNumber('');
          setHistory(0);
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
