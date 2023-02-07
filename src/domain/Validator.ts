import { MAX_DIGIT_LENGTH } from '@/constants';

export default class Validator {
	static isMaxDigitLength(digit: string): boolean {
		return digit.length <= MAX_DIGIT_LENGTH;
	}
}