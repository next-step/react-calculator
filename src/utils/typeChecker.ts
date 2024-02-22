import { Operation } from '@/types';

const operationSet = new Set(Object.values(Operation));

export const typeChecker = {
  validOperation: (value: string): value is Operation => operationSet.has(value as Operation),
};
