import { useState } from "react";
import {
	CalculatorReceiver,
	ResetCommand,
	Command
} from "../../commands/CalculatorCommands";
import {
	LastOperationType,
	extractLastOperation,
	isValidExpressionAndUnderLimit,
	parseFourBasicOperationsExpression,
	performCalculation
} from "./calculatorUtils";
import { isOperator } from "../../../constants";

export const useCalculator = () => {
	const [receiver] = useState(new CalculatorReceiver());
	const [expression, setExpression] = useState("0");
	const [lastOperation, setLastOperation] = useState<LastOperationType>({
		operator: null,
		number: 0
	});

	const executeCommand = (command: Command) => {
		command.execute();
		setExpression(receiver.getCurrentValue().toString());
	};

	const handleInput = (input: string) => {
		// 0으로 시작하는 숫자는 0을 제거하고 입력
		if (expression === "0" && !isOperator(input)) {
			setExpression(input);
			return;
		}

		// 연산자 이후 0을 입력하면 0을 제거하고 입력
		if (expression.slice(-1) === "0" && !isOperator(input)) {
			setExpression((prev) => prev.slice(0, -1) + input);
			return;
		}

		// 연산자가 연속으로 입력되는 경우를 방지 및 자리수 제한
		if (isValidExpressionAndUnderLimit(expression, input, 1000)) {
			setExpression((prev) => prev + input);
		} else {
			alert("입력은 3자리 숫자까지만 가능합니다.");
		}
	};

	const repeatLastOperation = (lastOperation: LastOperationType) => {
		if (lastOperation.operator === null) {
			return receiver.getCurrentValue();
		}
		return receiver.calculate(lastOperation.operator, lastOperation.number);
	};

	const calculateAndUpdateLastOperation = () => {
		const parsedExpression = parseFourBasicOperationsExpression(expression);

		if (parsedExpression.length < 2) {
			setExpression(repeatLastOperation(lastOperation).toString());
			return;
		}

		setExpression(performCalculation(receiver, parsedExpression).toString());

		setLastOperation(extractLastOperation(parsedExpression));
	};

	const reset = () => {
		executeCommand(new ResetCommand(receiver));
		setExpression("0");
		setLastOperation({ operator: null, number: 0 });
	};

	return {
		expression,
		handleInput,
		calculateAndUpdateLastOperation,
		reset
	};
};
