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
import { validateInput } from "../../../util/inputValidation";

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

		if (parsedExpression.length < 3) {
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
