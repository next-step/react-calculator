import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DigitButton from '../DigitButton';
import StatusPane from '../StatusPane';
import styles from './index.module.css';
import ClearButton from '../ClearButton';
import ModifierButton from '../ModifierButton';
import { CALCULATOR } from '../../domain/calculator/constant';

const { MODIFIER, NATURAL_NUMBER } = CALCULATOR;
const getClassNames = (styles = []) => styles.join(' ');

const digits = Array.from({ length: 10 }, (_, idx) => idx).sort((a, b) => b - a);
const modifiers = [MODIFIER.DIVIDE, MODIFIER.MULTIPLY, MODIFIER.SUBTRACT, MODIFIER.ADD, MODIFIER.EQUAL];

function Calculator({ calculator }) {
  const [display, setDisplay] = useState(NATURAL_NUMBER.ZERO);

  const buttonPressHandler = (value) => {
    try {
      calculator.input(value);
      setDisplay(calculator.output);
    } catch (error) {
      alert(error.message);
    }
  };

  const clear = () => {
    setDisplay(NATURAL_NUMBER.ZERO);
    calculator.clear();
  };

  return (
    <div className={styles.calculator} data-testid="calculator">
      <StatusPane>{display}</StatusPane>
      <div className={getClassNames([styles.digits, styles.flex])}>
        {digits.map((number) => (
          <DigitButton value={number} key={number} onClick={buttonPressHandler} />
        ))}
      </div>
      <div className={getClassNames([styles.modifiers, styles.subgrid])}>
        <ClearButton onClick={clear} />
      </div>
      <div className={getClassNames([styles.operations, styles.subgrid])}>
        {modifiers.map((modifier) => (
          <ModifierButton key={modifier} modifier={modifier} onClick={buttonPressHandler} />
        ))}
      </div>
    </div>
  );
}

Calculator.propTypes = {
  calculator: PropTypes.object,
};

export default Calculator;
