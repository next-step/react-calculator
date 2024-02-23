import {useState} from 'react';

import Digits from './components/Digits';
import Modifiers from './components/Modifiers';
import Operations from './components/Operations';

import {Validation} from './utils/Validation';
import {Calculator} from './utils/Calculator';

import fixtures from './fixtures';

function App() {
	const [firstNumber, setFirstNumber] = useState<string>('');
	const [secondNumber, setSecondNumber] = useState<string>('');
	const [operator, setOperator] = useState<string>('');
	const [resultNubmber, setResultNumber] = useState<string>('');

	const calculator = new Calculator();

	let isValidNumber = true;

	const validation = new Validation();
	const {alertMessage} = fixtures;

	const equation = firstNumber + operator + secondNumber;
	const displayResult = equation || resultNubmber || '0';

	const setNumber = (
		prev: string,
		currentNumber: string,
		setter: (currentNumber: string) => void,
	) => {
		isValidNumber = true;

		if (validation.isNotValidNumberLength(prev)) {
			alert(alertMessage);
			isValidNumber = false;
		}

		if (validation.isNotValidZero(prev, currentNumber)) {
			isValidNumber = false;
		}

		if (isValidNumber) {
			setter(currentNumber);
		}
	};

	const handleClickAc = () => {
		setResultNumber('0');
		setFirstNumber('');
		setSecondNumber('');
		setOperator('');
	};

	const handleClickNumber = (currentNumber: string) => {
		if (!operator) {
			setNumber(
				firstNumber,
				currentNumber,
				currentNumber => {
					setFirstNumber(firstNumber => (firstNumber + currentNumber));
				},
			);
		}

		if (operator) {
			setNumber(
				secondNumber,
				currentNumber,
				currentNumber => {
					setSecondNumber((secondNumber: string) => (secondNumber + currentNumber));
				},
			);
		}
	};

	const handleInfinity = (result: string) => result === 'Infinity'
		? '오류' : result;

	const handleClickOperator = (value: string) => {
		setOperator(value);
	};

	const handleClickEqualSign = () => {
		if (secondNumber === '') {
			setResultNumber(firstNumber);
			setFirstNumber('');
			setSecondNumber('');
			setOperator('');
			return;
		}

		let calculatedResult = 0;

		const num1 = Number(firstNumber);
		const num2 = Number(secondNumber);

		switch (operator) {
			case '+':
				calculatedResult = calculator.sum(num1, num2);
				break;
			case '-':
				calculatedResult = calculator.subtract(num1, num2);
				break;
			case 'X':
				calculatedResult = calculator.multiply(num1, num2);
				break;
			case '/':
				calculatedResult = calculator.divide(num1, num2);
				break;
			default:
				break;
		}

		setResultNumber(handleInfinity(String(calculatedResult)));
		setFirstNumber('');
		setSecondNumber('');
		setOperator('');
	};

	return (
		<div id='app'>
			<div className='calculator'>
				<h1 id='total'>
					{displayResult}
				</h1>
				<Digits
					handleClickNumber={handleClickNumber}
				/>
				<Modifiers
					handleClickAc={handleClickAc}
				/>
				<Operations
					handleClickOperator={handleClickOperator}
					handleClickEqualSign={handleClickEqualSign}
				/>
			</div>
		</div>
	);
}

export default App;
