import { MouseEventHandler } from 'react';
import { DIGITS, OPERATION_SIGN } from './constants';
import { Digit } from './components/Digit';
import { Modifier } from './components/Modifier';
import { Operation } from './components/Operation';

function App() {
  const onClickDigit: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(e);
  };

  const onClickModifier: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(e);
  };

  const onClickOperation: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(e);
  };

  return (
    <div id={'app'}>
      <div className={'calculator'}>
        <h1 id={'total'}>0</h1>
        <div className={'digits flex'}>
          {DIGITS.map((num) => (
            <Digit key={num} num={num} onClick={onClickDigit} />
          ))}
        </div>
        <div className={'modifiers subgrid'}>
          <Modifier onClick={onClickModifier} />
        </div>
        <div className={'operations subgrid'}>
          {Object.entries(OPERATION_SIGN).map(([op, sign]) => (
            <Operation key={op} sign={sign} onClick={onClickOperation} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
