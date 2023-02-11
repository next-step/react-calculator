import { useState } from 'react';

const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const operations = ['/', 'X', '-', '+', '='];

let needInit = false;

function App() {
  const [history, setHistory] = useState(0);
  const [currentNumber, setCurrentNumber] = useState('');

  return (
    <div id="app">
      <div className='calculator'>
        <h1 id='total'>{currentNumber || '0'}</h1>
        <div className='digits flex'>
          {numbers.map((number) => (
            <button key={`digit-${number}`} className='digit' onClick={() => {
              setCurrentNumber((prev) => {
                const stringNumber = String(number);
                if (needInit) return stringNumber;

                return prev + stringNumber;
              })}
            }>
              {number}
            </button>)
          )}
        </div>
        <div className='modifiers subgrid'>
          <button className='modifier' onClick={() => setCurrentNumber('')}>AC</button>
        </div>
        <div className='operations subgrid'>
          <button className='operation'>/</button>
          <button className='operation'>X</button>
          <button className='operation'>-</button>
          <button className='operation'>+</button>
          <button className='operation' id="equal-sign">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
