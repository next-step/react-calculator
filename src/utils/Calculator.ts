export class Calculator {
	sum(num1: number, num2: number): number {
		return num1 + num2;
	}

	subtract(num1: number, num2: number): number {
		return num1 - num2;
	}

	multiply(num1: number, num2: number): number {
		return num1 * num2;
	}

	divide(num1: number, num2: number): number {
		return Math.floor(num1 / num2);
	}
}
