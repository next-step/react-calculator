export default class Calculator {
	private readonly operator: string;
	private readonly calculateData: number[];

	constructor(operator: string, calculateData: number[]) {
		this.operator = operator;
		this.calculateData = calculateData;
	}

	public result(): number {
		switch (this.operator) {
			case '+':
				return this.plus();
			case '-':
				return this.minus();
			case 'X':
				return this.multiply();
			case '/':
				return this.divide();
			default:
				throw new Error(`${this.operator} 연산자는 정의되지 않은 연산자입니다.`);
		}
	}

	public plus = (): number => this.calculateData.reduce((acr, cur) => acr + cur);
	public minus = (): number => this.calculateData.reduce((acr, cur) => acr - cur);
	public multiply = (): number => this.calculateData.reduce((acr, cur) => acr * cur);
	public divide = (): number => Math.round(this.calculateData.reduce((acr, cur) => acr / cur));
}