import { Calculator, Operator } from './index';

const { symbols: OPERATOR_SYMBOLS, MAX_OPERATOR_LENGTH } = Operator;

export default class Validator {
	static isMaxOperatorLength(text: string): boolean {
		const findOperator = text.split('').filter((item: string) => (
			OPERATOR_SYMBOLS.includes(item)
		));
		return findOperator.length > MAX_OPERATOR_LENGTH;
	}

	static isOverMaxDigitLength(text: string): boolean {
		const operator = text.split('').find((item: string) => (
			OPERATOR_SYMBOLS.includes(item)
		));

		if (operator) {
			return text.split(operator).every((item: string) => (
				item.length <= Calculator.MAX_DIGIT_LENGTH && item.length > 0
			));
		}

		return text.length <= Calculator.MAX_DIGIT_LENGTH;
	}
}