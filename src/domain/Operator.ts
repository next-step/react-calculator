export default class Operator {
	public static readonly MAX_OPERATOR_LENGTH = 1;
	public static SYMBOLS: object = {
		PLUS: new Operator('+', (a, b) => a + b),
		MINUS: new Operator('-', (a, b) => a - b),
		MULTIPLY: new Operator('X', (a, b) => a * b),
		DIVIDE: new Operator('/', (a, b) => Math.round(a / b)),
	};
	private readonly operator: string;
	private readonly calculator: (a, b) => number;

	constructor(operator: string, calculator: (a, b) => number) {
		this.operator = operator;
		this.calculator = calculator;
	}

	static get symbols(): string[] {
		return Object.values(this.SYMBOLS).map((item) => item.operator);
	}

	public static calculate(operator: string, [a, b]: [number, number]): number {
		const { calculator } = Object.values(Operator.SYMBOLS).find((item) => item.operator === operator);
		return calculator(a, b);
	}
}