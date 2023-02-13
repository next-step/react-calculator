import { useState } from 'react';

import type { Operation } from './constants/operations';

import { DigitNumbers } from './DigitNumbers';
import { Modifier } from './Modifier';
import { Operations } from './Operations';

const initStates: {
  initialHistoryState: number,
  initialIsNeedInitState: boolean,
  initialCurrentNumberState: string | undefined,
  initialCurrentOperationState: Operation,
} = {
  initialHistoryState: 0,
  initialIsNeedInitState: false,
  initialCurrentNumberState: undefined,
  initialCurrentOperationState: '=',
};

function App() {
  const historyStateBundle = useState(initStates.initialHistoryState);
  const isNeedInitStateBundle = useState(initStates.initialIsNeedInitState);
  const currentNumberStateBundle = useState(initStates.initialCurrentNumberState);
  const currentOperationStateBundle = useState(initStates.initialCurrentOperationState);

  const [_, setHistory] = historyStateBundle;
  const [_2, setIsNeedInit] = isNeedInitStateBundle;
  const [_3, setCurrentOperation] = currentOperationStateBundle;
  const [currentNumber, setCurrentNumber] = currentNumberStateBundle;

  return (
    <div id="app">
      <div className='calculator'>
        <h1 id='total'>{currentNumber ?? '0'}</h1>
        <DigitNumbers
          isNeedInitStateBundle={isNeedInitStateBundle}
          currentNumberStateBundle={currentNumberStateBundle}
        />
        <Modifier reset={() => {
          setHistory(initStates.initialHistoryState);
          setIsNeedInit(initStates.initialIsNeedInitState);
          setCurrentNumber(initStates.initialCurrentNumberState);
          setCurrentOperation(initStates.initialCurrentOperationState);
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
