import { ReactNode } from "react";
import "../../css/index.css";
import Display from "./Display";
import Keypad from "./Keypad";
import Operators from "./Operators";
import Reset from "./Reset";

interface CalculatorProps {
	children: ReactNode;
}

const Calculator = ({ children }: CalculatorProps) => {
	return (
		<div id='app'>
			<div className='calculator'>{children}</div>
		</div>
	);
};

Calculator.Reset = Reset;
Calculator.Display = Display;
Calculator.Keypad = Keypad;
Calculator.Operators = Operators;

export default Calculator;
