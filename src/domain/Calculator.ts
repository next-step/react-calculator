import { Operator } from './index';

type CalculatorData = [number, number];

export default class Calculator {
	public static readonly MAX_DIGIT_LENGTH = 3;
	private readonly operator: string;
	private readonly calculateData: CalculatorData;

	constructor(operator: string, calculateData: CalculatorData) {
		this.operator = operator;
		this.calculateData = calculateData;
	}

	public execute() {
		return Operator.calculate(this.operator, this.calculateData);
	}
}