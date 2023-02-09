import { useEffect, useState } from 'react';
import './App.css';

import Digit from '@/components/calculator/digit/Digit';
import Modifier from '@/components/calculator/modifier/Modifier';
import Operation from '@/components/calculator/operation/Operation';

function App() {
  const [calc, setCalc] = useState('0');

  useEffect(() => {
    if (parseInt(calc, 10) === Infinity) {
      setCalc('오류');
    }
  }, [calc]);

  return (
    <div id="app">
      <div className="calculator">
        <h1 id="total">{calc}</h1>

        <Digit calc={calc} setCalc={setCalc} />

        <Modifier setCalc={setCalc} />

        <Operation calc={calc} setCalc={setCalc} />
      </div>
    </div>
  );
}

export default App;
