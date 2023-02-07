import { MAX_DIGIT_LENGTH, MAX_OPERATOR_LENGTH, OPERATOR } from '@/constants';

export default class Validator {
	static isMaxOperatorLength(text: string): boolean {
		const findOperator = text.split('').filter((item: string) => OPERATOR.includes(item));
		return findOperator.length > MAX_OPERATOR_LENGTH;
	}

	static isOverMaxDigitLength(text: string): boolean {
		const operator = text.split('').find((item: string) => OPERATOR.includes(item));

		if (operator) {
			return text.split(operator).every((item: string) => item.length <= MAX_DIGIT_LENGTH);
		}

		return text.length <= MAX_DIGIT_LENGTH;
	}
}