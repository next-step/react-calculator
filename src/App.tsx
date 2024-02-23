import {useState} from 'react';

import Digits from './components/Digits';
import Modifiers from './components/Modifiers';
import Operations from './components/Operations';
import {Validation} from './utils/Validation';
import fixtures from './fixtures';

function App() {
	const [firstNumber, setFirstNumber] = useState<string>('');
	const [secondNumber, setSecondNumber] = useState<string>('');
	const [operator, setOperator] = useState<string>('');
	const [resultNubmber, setResultNumber] = useState<string>('');

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

	return (
		<div id='app'>
			<div className='calculator'>
				<h1 id='total'>
					{displayResult}
				</h1>
				<Digits
					handleClickNumber={handleClickNumber}
				/>
				<Modifiers onClickAc={handleClickAc} />
				<Operations
					firstNumber={firstNumber}
					secondNumber={secondNumber}
					operator={operator}
					setResultNumber={setResultNumber}
					setFirstNumber={setFirstNumber}
					setSecondNumber={setSecondNumber}
					setOperator={setOperator}
				/>
			</div>
		</div>
	);
}

export default App;
