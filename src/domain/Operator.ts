export default class Operator {
	public static readonly MAX_OPERATOR_LENGTH = 1;
	public static readonly SYMBOLS = new Map<string, Operator>([
		['+', new Operator('+', (a, b) => a + b)],
		['-', new Operator('-', (a, b) => a - b)],
		['X', new Operator('X', (a, b) => a * b)],
		['/', new Operator('/', (a, b) => Math.round(a / b))],
	]);
	private readonly operator: string;
	private readonly calculator: (a, b) => number;

	constructor(operator: string, calculator: (a, b) => number) {
		this.operator = operator;
		this.calculator = calculator;
	}

	static get symbols(): string[] {
		return [...this.SYMBOLS.values()].map((item) => item.operator).reverse();
	}

	public static calculate(operator: string, [a, b]: [number, number]): number {
		const { calculator } = this.SYMBOLS.get(operator);
		return calculator(a, b);
	}
}