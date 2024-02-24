import { Operator } from '@/types';

const operatorSet: Set<string> = new Set(Object.values(Operator));

export const typeChecker = {
  validOperator: (value: string): value is Operator => operatorSet.has(value),
};
