import type { CalculatorKeyType } from '@/components';
import type { ControlAction, Digit, Operator } from '@/types';

export const generateCalculatorKey = (
  type: CalculatorKeyType,
  value: Digit | Operator | ControlAction,
  label: string,
) => ({ type, value, label });
