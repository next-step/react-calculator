import { useState } from 'react';
import './App.css';

import Digit from '@/components/calculator/digit/Digit';
import Modifier from '@/components/calculator/modifier/Modifier';
import Operation from '@/components/calculator/operation/Operation';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="app">
      <div className="calculator">
        <h1 id="total">0</h1>

        <Digit />

        <Modifier />

        <Operation />
      </div>
    </div>
  );
}

export default App;
