import { Operation } from '@/types';

const operationSet: Set<string> = new Set(Object.values(Operation));

export const typeChecker = {
  validOperation: (value: string): value is Operation => operationSet.has(value),
};
