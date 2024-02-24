import { parseCalculatorKeys } from './parseCalculatorKeys';
import { CalculatorKeyConfig, CalculatorKeyType } from '@/components';
import { ControlAction, Operator } from '@/types';

describe('parseCalculatorKeys', () => {
  it('should parse calculator keys', () => {
    const keys: CalculatorKeyConfig[] = [
      { type: CalculatorKeyType.DigitKey, value: 1, label: '1' },
      { type: CalculatorKeyType.DigitKey, value: 2, label: '2' },
      { type: CalculatorKeyType.OperatorKey, value: Operator.Add, label: '+' },
      { type: CalculatorKeyType.AllClearKey, value: ControlAction.Clear, label: 'AC' },
    ];
    const result = parseCalculatorKeys(keys);
    expect(result).toEqual({
      digitKey: [
        { type: CalculatorKeyType.DigitKey, value: 1, label: '1' },
        { type: CalculatorKeyType.DigitKey, value: 2, label: '2' },
      ],
      operatorKey: [{ type: CalculatorKeyType.OperatorKey, value: Operator.Add, label: '+' }],
      allClearKey: [{ type: CalculatorKeyType.AllClearKey, value: ControlAction.Clear, label: 'AC' }],
    });
  });
});
