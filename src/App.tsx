import { useState } from 'react';

import type { Operation } from './constants/operations';

import { DigitNumbers } from './DigitNumbers';
import { Modifier } from './Modifier';
import { Operations } from './Operations';

const initialHistoryState = 0;
const initialIsNeedInitState = false;
const initialCurrentNumberState = '';
const initialCurrentOperationState = '=';

function App() {
  const historyStateBundle = useState(initialHistoryState);
  const isNeedInitStateBundle = useState(initialIsNeedInitState);
  const currentNumberStateBundle = useState(initialCurrentNumberState);
  const currentOperationStateBundle = useState<Operation>(initialCurrentOperationState);

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
          setHistory(initialHistoryState);
          setIsNeedInit(initialIsNeedInitState);
          setCurrentNumber(initialCurrentNumberState);
          setCurrentOperation(initialCurrentOperationState);
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
