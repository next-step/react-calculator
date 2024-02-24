import { Operator } from '@/types';

const operatorSet: Set<string | number> = new Set(Object.values(Operator));

export const typeChecker = {
  validOperator: (value: string | number): value is Operator => operatorSet.has(value),
};
