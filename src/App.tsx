import { useState } from 'react';
import './App.css';

import Digit from '@/components/calculator/digit/Digit';
import Modifier from '@/components/calculator/modifier/Modifier';
import Operation from '@/components/calculator/operation/Operation';
import Total from '@/components/calculator/total/Total';

function App() {
  const [calc, setCalc] = useState('');

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
