import type { ControlAction, Digit, Operator } from '@/types';

export enum CalculatorKeyType {
  DigitKey = 'digitKey',
  OperatorKey = 'operatorKey',
  AllClearKey = 'allClearKey',
}

export type CalculatorKeyConfig<KeyType extends CalculatorKeyType = CalculatorKeyType> = {
  label: string;
  value: ValueForType<KeyType>;
  type: KeyType;
};

export type CalculatorKeyMapping = {
  [KeyType in CalculatorKeyType]: CalculatorKeyConfig<KeyType>[];
};

type CalculatorKeyValueMapping = {
  [CalculatorKeyType.DigitKey]: Digit;
  [CalculatorKeyType.OperatorKey]: Operator | ControlAction.Result;
  [CalculatorKeyType.AllClearKey]: ControlAction.AllClear;
};

export type ValueForType<KeyType extends CalculatorKeyType> = CalculatorKeyValueMapping[KeyType];
