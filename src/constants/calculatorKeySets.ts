import { CalculatorKeyType } from '@/components';
import { ControlAction, Digit, Operator } from '@/types';

const DIGITS = [
  { type: CalculatorKeyType.DigitKey, value: Digit.Nine, label: '9' },
  { type: CalculatorKeyType.DigitKey, value: Digit.Eight, label: '8' },
  { type: CalculatorKeyType.DigitKey, value: Digit.Seven, label: '7' },
  { type: CalculatorKeyType.DigitKey, value: Digit.Six, label: '6' },
  { type: CalculatorKeyType.DigitKey, value: Digit.Five, label: '5' },
  { type: CalculatorKeyType.DigitKey, value: Digit.Four, label: '4' },
  { type: CalculatorKeyType.DigitKey, value: Digit.Three, label: '3' },
  { type: CalculatorKeyType.DigitKey, value: Digit.Two, label: '2' },
  { type: CalculatorKeyType.DigitKey, value: Digit.One, label: '1' },
  { type: CalculatorKeyType.DigitKey, value: Digit.Zero, label: '0' },
];

const OPERATORS = [
  { type: CalculatorKeyType.OperatorKey, value: Operator.Divide, label: '/' },
  { type: CalculatorKeyType.OperatorKey, value: Operator.Multiply, label: 'X' },
  { type: CalculatorKeyType.OperatorKey, value: Operator.Subtract, label: '-' },
  { type: CalculatorKeyType.OperatorKey, value: Operator.Add, label: '+' },
  { type: CalculatorKeyType.OperatorKey, value: ControlAction.Result, label: '=' },
];

const CONTROL_ACTIONS = [{ type: CalculatorKeyType.AllClearKey, value: ControlAction.Clear, label: 'AC' }];

export const CALCULATOR_KEY_SETS = [...DIGITS, ...OPERATORS, ...CONTROL_ACTIONS];
