export class Validation {
	isNotValidNumberLength(number: string) {
		return number.length > 2;
	}

	isNotValidZero(preNumber: string, number: string) {
		return (
			preNumber.length === 1
			&& preNumber === '0'
			&& number === '0'
		);
	}
}
