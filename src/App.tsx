// - [X] 2개의 숫자에 대해 덧셈이 가능하다.
// - [X] 2개의 숫자에 대해 뺄셈이 가능하다.
// - [X] 2개의 숫자에 대해 곱셈이 가능하다.
// - [X] 2개의 숫자에 대해 나눗셈이 가능하다.
// - [X] AC(All Clear)버튼을 누르면 0으로 초기화 한다.
// - [X] 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
// - [ ] 계산 결과를 표현할 때 소수점 이하는 버림한다.
// - [ ] 연산의 결과값이 `Infinity`일 경우 `오류`라는 문자열을 보여준다. (아이폰 참고)

// - [ ] 2자리 수 이상의 숫자는 0이 앞에 올 수 없다.

import {useState} from 'react';

import NumberButton from './components/NumberButton';
import OperatorButton from './components/OperatorButton';
import EqualSignButton from './components/EqualSignButton';

function App() {
	const [firstNumber, setFirstNumber] = useState<string>('');
	const [secondNumber, setSecondNumber] = useState<string>('');
	const [operator, setOperator] = useState<string>('');
	const [resultNubmber, setResultNumber] = useState<string>('');

	const Numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
	const Operators = ['/', 'X', '-', '+'];
	const equalSign = '=';

	const input = firstNumber + operator + secondNumber || 0;

	const handleClickAC = () => {
		setResultNumber('0');
		setFirstNumber('');
		setSecondNumber('');
		setOperator('');
	};

	return (
		<div id='app'>
			<div className='calculator'>
				<h1 id='total'>
					{
						input === '0' || input ? input : resultNubmber
					}
				</h1>
				<div className='digits flex'>
					{Numbers.map(number => (
						<NumberButton
							key={number}
							setFirstNumber={setFirstNumber}
							firstNumber={firstNumber}
							setSecondNumber={setSecondNumber}
							secondNumber={secondNumber}
							operator={operator}
							value={number}
						/>
					))}
				</div>
				<div className='modifiers subgrid'>
					<button className='modifier' onClick={handleClickAC}>AC</button>
				</div>
				<div className='operations subgrid'>
					{Operators.map(operator => (
						<OperatorButton
							key={operator}
							setOperator={setOperator}
							value={operator}/>
					))}
					<EqualSignButton
						value={equalSign}
						firstNumber={Number(firstNumber)}
						secondNumber={Number(secondNumber)}
						operator={operator}
						setResultNumber={setResultNumber}
						setFirstNumber={setFirstNumber}
						setSecondNumber={setSecondNumber}
						setOperator={setOperator}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
