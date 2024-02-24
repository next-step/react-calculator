import { Digit, Operator } from '@/types';

const digitSet: Set<string | number> = new Set(Object.values(Digit));
const operatorSet: Set<string | number> = new Set(Object.values(Operator));

export const typeChecker = {
  validDigit: (value: string | number): value is Digit => digitSet.has(value),
  validOperator: (value: string | number): value is Operator => operatorSet.has(value),
};
