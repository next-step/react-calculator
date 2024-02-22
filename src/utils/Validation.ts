export class Validation {
	isNotValidNumberLength(number: string) {
		return number.length > 2;
	}

	isNotValidZero(preNumber: string, number: string) {
		return number === '0' && preNumber === '0';
	}
}
