import { Operator } from '@/constants/operation';

export const isInfinite = (n: number) => n === Infinity || n === -Infinity;
const isOperator = (arg: any): arg is Operator => OPERATORS.includes(arg);
