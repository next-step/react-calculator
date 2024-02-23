import { OPERATORS_TYPE, isOperator } from "../../../constants";
import { CalculatorReceiver } from "../../commands";

export interface LastOperationType {
	operator: OPERATORS_TYPE | null;
	number: number;
}

export const isValidExpressionAndUnderLimit = (
	currentExpression: string,
	input: string,
	limit: number
): boolean => {
	const isOperator = /[+\-X\\/]/.test(input);
	// 마지막 문자가 연산자인지 확인
	const lastCharIsOperator = /[+\-X\\/]/.test(currentExpression.slice(-1));

	if (isOperator) {
		// 연산자가 연속으로 입력되는 경우를 방지
		return !lastCharIsOperator;
	} else {
		// 숫자 입력의 경우
		const newExpression = lastCharIsOperator
			? input
			: currentExpression.concat(input);
		const matches = newExpression.match(/(\d+)$/);
		const newNumber = matches ? Number(matches[0]) : 0;

		// 새로운 숫자가 limit을 초과하는지 확인
		return newNumber < limit;
	}
};

export const parseFourBasicOperationsExpression = (
	expression: string
): string[] => {
	return expression.match(/(\d+)|([+\-X\\/])/g) || [];
};

export const performCalculation = (
	receiver: CalculatorReceiver,
	parsedExpression: string[]
): string | number => {
	const total = parseFloat(parsedExpression[0]);
	receiver.setInput(total.toString());

	let operator: OPERATORS_TYPE = "+";
	for (let i = 1; i < parsedExpression.length; i++) {
		const val = parsedExpression[i];
		if (isNaN(parseFloat(val))) {
			operator = val as OPERATORS_TYPE;
		} else {
			receiver.calculate(operator, parseFloat(val));
		}
	}
	return receiver.getCurrentValue() === Infinity
		? "오류"
		: receiver.getCurrentValue();
};

export const extractLastOperation = (
	parsedExpression: string[]
): LastOperationType => {
	let lastOperator: OPERATORS_TYPE | null = null;
	let lastNumber = 0;
	for (let i = parsedExpression.length - 1; i >= 0; i--) {
		const value = parsedExpression[i];
		if (!isNaN(parseFloat(value))) {
			lastNumber = parseFloat(value);
		}
		if (isOperator(value)) {
			lastOperator = value as OPERATORS_TYPE;
			break;
		}
	}

	return { operator: lastOperator, number: lastNumber };
};
