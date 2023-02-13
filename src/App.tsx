import { useEffect, useState } from 'react';
import './App.css';

import Digit from '@/components/calculator/digit/Digit';
import Modifier from '@/components/calculator/modifier/Modifier';
import Operation from '@/components/calculator/operation/Operation';
import Total from '@/components/calculator/total/Total';

import changeDecimal from './lib';

function App() {
  const [calc, setCalc] = useState('0');

  useEffect(() => {
    if (changeDecimal(calc) === Infinity) {
      setCalc('오류');
    }
  }, [calc]);

  return (
    <div id="app">
      <div className="calculator">
        <Total calc={calc} />

        <Digit calc={calc} setCalc={setCalc} />

        <Modifier setCalc={setCalc} />

        <Operation calc={calc} setCalc={setCalc} />
      </div>
    </div>
  );
}

export default App;
