import { Digit, Operator } from '@/types';

export const typeChecker = {
  validDigit: (value: string | number): value is Digit => Object.values(Digit).some((digit) => digit === value),
  validOperator: (value: string | number): value is Operator =>
    Object.values(Operator).some((operator) => operator === value),
};
