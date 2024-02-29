import { DIGITS, ERROR_MESSAGE, OPERATION_SIGN } from './constants';
import { Digit } from './components/Digit';
import { Modifier } from './components/Modifier';
import { Operation } from './components/Operation';
import { useCalculator } from './hooks/useCalculator';
import { Validator } from './lib/Validator';

function App() {
  const { calculatorStatus, onClickDigit, onClickModifier, onClickOperation } = useCalculator();
  const { display, operation } = calculatorStatus;

  return (
    <div id={'app'}>
      <div className={'calculator'}>
        <h1 id={'total'}>{Validator.checkIsError(display) ? ERROR_MESSAGE : display}</h1>
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
            <Operation
              key={op}
              operation={op}
              currOperation={operation}
              onClick={() => onClickOperation(op)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
