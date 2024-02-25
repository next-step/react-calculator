import { Digit, Operator, ControlAction } from '@/types';
import { CalculatorKeyType } from '@/components/calculator';
import { generateCalculatorKey } from '@/services/generateCalculatorKey';

const DIGITS = [
  generateCalculatorKey(CalculatorKeyType.DigitKey, Digit.Nine, '9'),
  generateCalculatorKey(CalculatorKeyType.DigitKey, Digit.Eight, '8'),
  generateCalculatorKey(CalculatorKeyType.DigitKey, Digit.Seven, '7'),
  generateCalculatorKey(CalculatorKeyType.DigitKey, Digit.Six, '6'),
  generateCalculatorKey(CalculatorKeyType.DigitKey, Digit.Five, '5'),
  generateCalculatorKey(CalculatorKeyType.DigitKey, Digit.Four, '4'),
  generateCalculatorKey(CalculatorKeyType.DigitKey, Digit.Three, '3'),
  generateCalculatorKey(CalculatorKeyType.DigitKey, Digit.Two, '2'),
  generateCalculatorKey(CalculatorKeyType.DigitKey, Digit.One, '1'),
  generateCalculatorKey(CalculatorKeyType.DigitKey, Digit.Zero, '0'),
];

const OPERATORS = [
  generateCalculatorKey(CalculatorKeyType.OperatorKey, Operator.Divide, '/'),
  generateCalculatorKey(CalculatorKeyType.OperatorKey, Operator.Multiply, 'X'),
  generateCalculatorKey(CalculatorKeyType.OperatorKey, Operator.Subtract, '-'),
  generateCalculatorKey(CalculatorKeyType.OperatorKey, Operator.Add, '+'),
  generateCalculatorKey(CalculatorKeyType.OperatorKey, ControlAction.Result, '='),
];

const CONTROL_ACTIONS = [generateCalculatorKey(CalculatorKeyType.AllClearKey, ControlAction.AllClear, 'AC')];

export const CALCULATOR_KEY_SETS = [...DIGITS, ...OPERATORS, ...CONTROL_ACTIONS];
