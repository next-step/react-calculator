import { MAX_DIGIT_LENGTH, OPERATOR } from '@/constants';
import { MAX_OPERATOR_LENGTH } from '../constants';

export default class Validator {
	static isMaxDigitLength(digit: string): boolean {
		return digit.length <= MAX_DIGIT_LENGTH;
	}

	static isMaxOperatorLength(text: string): boolean {
		const findOperator = text.split('').filter((item: string) => OPERATOR.includes(item));
		return findOperator.length > MAX_OPERATOR_LENGTH;
	}
}