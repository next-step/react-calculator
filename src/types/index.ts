import { DIGITS, OPERATORS } from '@/constants';

type DigitType = (typeof DIGITS)[number];
type OperatorType = (typeof OPERATORS)[number]['label'];

export type { DigitType, OperatorType };
