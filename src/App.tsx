import { DIGITS, OPERATION_SIGN } from './constants';
import { Digit } from './components/Digit';
import { Modifier } from './components/Modifier';
import { Operation } from './components/Operation';
import { useCalculator } from './hooks/useCalculator';

function App() {
  const { display, onClickDigit, onClickModifier, onClickOperation } = useCalculator();

  return (
    <div id={'app'}>
      <div className={'calculator'}>
        <h1 id={'total'}>{display}</h1>
        <div className={'digits flex'}>
          {DIGITS.map((d) => (
            <Digit key={d} digit={d} onClick={() => onClickDigit(d)} />
          ))}
        </div>
        <div className={'modifiers subgrid'}>
          <Modifier onClick={onClickModifier} />
        </div>
        <div className={'operations subgrid'}>
          {Object.values(OPERATION_SIGN).map((op) => (
            <Operation key={op} operation={op} onClick={() => onClickOperation(op)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
