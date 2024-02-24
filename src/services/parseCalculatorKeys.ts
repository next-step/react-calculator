import type { CalculatorKeyConfig, CalculatorKeypad } from '@/components';
import { CalculatorKeyType } from '@/components';

export const parseCalculatorKeys = (calculatorKeys: CalculatorKeyConfig[]): CalculatorKeypad =>
  calculatorKeys.reduce<CalculatorKeypad>(
    (keypad, key) => {
      if (isKeyType(key, CalculatorKeyType.DigitKey)) {
        keypad[CalculatorKeyType.DigitKey].push(key);
      }
      if (isKeyType(key, CalculatorKeyType.OperatorKey)) {
        keypad[CalculatorKeyType.OperatorKey].push(key);
      }
      if (isKeyType(key, CalculatorKeyType.AllClearKey)) {
        keypad[CalculatorKeyType.AllClearKey].push(key);
      }
      return keypad;
    },
    {
      [CalculatorKeyType.DigitKey]: [],
      [CalculatorKeyType.OperatorKey]: [],
      [CalculatorKeyType.AllClearKey]: [],
    },
  );

const isKeyType = <KeyType extends CalculatorKeyType>(
  key: CalculatorKeyConfig,
  type: KeyType,
): key is CalculatorKeyConfig<KeyType> => key.type === type;
