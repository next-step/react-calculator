import { OPERATORS_MAP, OPERATORS_TYPE } from "../../constants";

export interface Command {
	execute(): void;
}

export class CalculatorReceiver {
	private current = 0;

	setInput(value: string) {
		this.current = parseFloat(value);
	}

	add(value: number) {
		this.current += value;
	}

	subtract(value: number) {
		this.current -= value;
	}

	multiply(value: number) {
		this.current *= value;
	}

	divide(value: number) {
		if (value === 0) {
			this.current = Infinity;
		} else {
			this.current /= value;
		}
	}

	getCurrentValue(): number {
		return this.current === Infinity ? Infinity : Math.floor(this.current);
	}

	reset() {
		this.current = 0;
	}

	calculate(operator: OPERATORS_TYPE, value: number): number {
		switch (OPERATORS_MAP[operator]) {
			case "+":
				this.add(value);
				break;
			case "-":
				this.subtract(value);
				break;
			case "*":
				this.multiply(value);
				break;
			case "/":
				this.divide(value);
				break;
			default:
				throw new Error("올바르지 않은 연산자입니다");
		}
		return this.getCurrentValue();
	}
}

export class AddCommand implements Command {
	constructor(private receiver: CalculatorReceiver, private value: number) {}

	execute() {
		this.receiver.add(this.value);
	}
}

export class SubtractCommand implements Command {
	constructor(private receiver: CalculatorReceiver, private value: number) {}

	execute() {
		this.receiver.subtract(this.value);
	}
}

export class MultiplyCommand implements Command {
	constructor(private receiver: CalculatorReceiver, private value: number) {}

	execute() {
		this.receiver.multiply(this.value);
	}
}

export class DivideCommand implements Command {
	constructor(private receiver: CalculatorReceiver, private value: number) {}

	execute() {
		this.receiver.divide(this.value);
	}
}

export class ResetCommand implements Command {
	constructor(private receiver: CalculatorReceiver) {}

	execute() {
		this.receiver.reset();
	}
}

export class CalculatorInvoker {
	constructor(private receiver: CalculatorReceiver) {}

	invoke(command: Command) {
		command.execute();
	}

	getCurrentValue(): number {
		return Math.floor(this.receiver.getCurrentValue());
	}
}
