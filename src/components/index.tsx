import styled from '../css/index.module.css';
import Total from './Total';
import Modifiers from './Modifiers';
import Digits from './Digits';
import Operations from './Operations';
import useCalculate from '../hooks/useCalculate';

export default function Calculator() {
  const {
    operands,
    operation,
    handleDigitClick,
    handleOperationClick,
    handleModifierClick,
  } = useCalculate();

  return (
    <div id={styled.app}>
      <div className={styled.calculator}>
        <Total operands={operands} operation={operation} />
        <Digits onDigitsClick={handleDigitClick} />
        <Modifiers onModifierClick={handleModifierClick} />
        <Operations onOperationClick={handleOperationClick} />
      </div>
    </div>
  );
}
