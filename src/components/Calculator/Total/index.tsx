import React from 'react';
import { useCalculator } from '../../../modules/context/Calculator/CalculatorContext';

const Total = () => {
  const {
    calculator: { total, operation, firstDigits, secondDigits },
  } = useCalculator();

  const digitValue =
    operation && secondDigits !== '0' ? secondDigits : firstDigits;
  const displayValue = total ? total : digitValue;

  return <h1 id="total">{displayValue}</h1>;
};

export default Total;
