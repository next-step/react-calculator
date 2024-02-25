import { OPERATORS } from './constants';

export type OperatorType = (typeof OPERATORS)[number];
export type ArithmeticOperatorType = Omit<OperatorType, "=">