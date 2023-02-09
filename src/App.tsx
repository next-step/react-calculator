import React, { useState } from 'react';
import './css/index.css';

import Digits from './components/Digits';

function App() {
  const [total, setTotal] = useState('');

  return (
    <div className="calculator">
      <h1 id="total">{total || '0'}</h1>
      <Digits setTotal={setTotal} />
      <div className="modifiers subgrid">
        <button className="modifier" onClick={() => setTotal('')}>
          AC
        </button>
      </div>
      <div className="operations subgrid">
        <button className="operation">/</button>
        <button className="operation">X</button>
        <button className="operation">-</button>
        <button className="operation">+</button>
        <button className="operation">=</button>
      </div>
    </div>
  );
}

export default App;
