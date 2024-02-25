import { isOperator } from "../constants";

export const validateInput = (input: string, expression: string) => {
	// 0으로 시작하는 숫자는 0을 제거하고 입력
	if (expression === "0" && !isOperator(input)) {
		return input;
	}
	// 음수 입력
	if (expression === "0" && input === "-") {
		return input;
	}
	// 연산자 이후 0을 입력하면 0을 제거하고 입력
	if (expression.slice(-1) === "0" && !isOperator(input)) {
		return expression.slice(0, -1) + input;
	}
	// 연산자가 연속으로 입력되는 경우를 방지
	if (checkLastCharacterIsOperator(expression) && isOperator(input)) {
		return expression.slice(0, -1).concat(input);
	}

	// 자리수 제한
	if (!checkOperationUnderLimit(expression, input, 1000)) {
		return "";
	}

	return expression.concat(input);
};

export const checkLastCharacterIsOperator = (expression: string) => {
	return isOperator(expression.slice(-1));
};

const checkOperationUnderLimit = (
	expression: string,
	input: string,
	limit: number
) => {
	const newExpression = checkLastCharacterIsOperator(expression)
		? input
		: expression.concat(input);
	const matches = newExpression.match(/(\d+)$/);
	const newNumber = matches ? Number(matches[0]) : 0;

	return newNumber < limit;
};
