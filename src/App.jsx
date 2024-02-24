import './App.css';
import { useState } from 'react';
import Digit from './components/button/Digit';
import Modifier from './components/button/Modifier';
import Operator from './components/button/Operator';

function App() {
  const [display, setDisplay] = useState('');
  const [allClear, setAllClear] = useState(true);

  const onClick = (value, type) => {
    if (type === 'modifier') {
      setAllClear(true);
      setDisplay('');
    } else {
      setAllClear(false);
      setDisplay(`${display}${value}`);
    }
  };

  return (
    <div id="app">
      <div className="calculator">
        <h1 id="total">{allClear ? 0 : display}</h1>
        <div className="digits flex">
          <Digit onClick={onClick} />
        </div>
        <div className="modifiers subgrid">
          <Modifier onClick={onClick} />
        </div>
        <div className="operations subgrid">
          <Operator onClick={onClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
