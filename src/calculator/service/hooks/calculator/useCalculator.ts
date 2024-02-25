import { useState } from "react";
import {
	CalculatorReceiver,
	ResetCommand,
	Command
} from "../../commands/CalculatorCommands";
import {
	LastOperationType,
	extractLastOperation,
	isNumberExpression,
	parseFourBasicOperationsExpression,
	performCalculation
} from "./calculatorUtils";
import { validateInput } from "../../../util/inputValidation";

const DEFAULT_EXPRESSION = "0";
const DEFAULT_LAST_OPERATION: LastOperationType = {
	operator: null,
	number: 0
};

export const useCalculator = () => {
	const [receiver] = useState(new CalculatorReceiver());
	const [expression, setExpression] = useState(DEFAULT_EXPRESSION);
	const [lastOperation, setLastOperation] = useState<LastOperationType>(
		DEFAULT_LAST_OPERATION
	);

	const executeCommand = (command: Command) => {
		command.execute();
		setExpression(receiver.getCurrentValue().toString());
	};

	const handleInput = (input: string) => {
		const validInput = validateInput(input, expression);
		if (!validInput) {
			alert("입력은 3자리까지만 가능합니다.");
			return;
		}
		setExpression(validInput);
	};

	const repeatLastOperation = (lastOperation: LastOperationType) => {
		if (lastOperation.operator === null) {
			return receiver.getCurrentValue();
		}

		return receiver.calculate(lastOperation.operator, lastOperation.number);
	};

	const calculateAndUpdateLastOperation = () => {
		const parsedExpression = parseFourBasicOperationsExpression(expression);

		if (isNumberExpression(parsedExpression)) {
			setExpression(repeatLastOperation(lastOperation).toString());
			return;
		}

		setExpression(performCalculation(receiver, parsedExpression).toString());

		setLastOperation(extractLastOperation(parsedExpression));
	};

	const reset = () => {
		executeCommand(new ResetCommand(receiver));
		setExpression(DEFAULT_EXPRESSION);
		setLastOperation(DEFAULT_LAST_OPERATION);
	};

	return {
		expression,
		handleInput,
		calculateAndUpdateLastOperation,
		reset
	};
};
