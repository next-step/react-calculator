import {useState} from 'react';

import Digits from './components/Digits';
import Modifiers from './components/Modifiers';
import Operations from './components/Operations';

function App() {
	const [firstNumber, setFirstNumber] = useState<string>('');
	const [secondNumber, setSecondNumber] = useState<string>('');
	const [operator, setOperator] = useState<string>('');
	const [resultNubmber, setResultNumber] = useState<string>('');

	const equation = firstNumber + operator + secondNumber;
	const displayResult = equation || resultNubmber || '0';

	const handleClickAc = () => {
		setResultNumber('0');
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
					setFirstNumber={setFirstNumber}
					firstNumber={firstNumber}
					setSecondNumber={setSecondNumber}
					secondNumber={secondNumber}
					operator={operator}
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
