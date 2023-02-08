import { useState, MouseEvent } from 'react';
import Digits from './Digits';
import Modifier from './Modifier';
import Operations from './Operations';
import Total from './Total';
import './calculator.css';

const add = (a: number, b: number) => {
  if (b === undefined) {
    b = 0;
  }
  return a + b;
};
const sub = (a: number, b: number) => {
  if (b === undefined) {
    b = 0;
  }
  return a - b;
};
const mul = (a: number, b: number) => {
  if (b === undefined) {
    b = 1;
  }
  return a * b;
};
const dev = (a: number, b: number) => {
  if (b === undefined) {
    b = 1;
  }
  return a / b;
};

const mapOperation: Record<string, any> = {
  '+': add,
  '-': sub,
  X: mul,
  '/': dev,
};

function Calculator() {
  const [total, setTotal] = useState('');
  const [digits, setDigits] = useState<string[]>([]);
  const [operations, setOperations] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState('');

  // const total = digits.map((digit, index) => `${digit}${operations[index] ?? ''}`).join('');

  const handleDigits = (e: MouseEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) return;

    if (currentInput.length === 3) {
      return window.alert('3자리까지 가능');
    }
    const { value } = e.target;
    setTotal(prev => (prev += value));
    setCurrentInput(prev => (prev += value));
  };

  const handleOperations = (e: MouseEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) return;
    const { value } = e.target;

    if (value === '=') {
      const copyOperations = [...operations];
      const copyDigits = [...digits];
      let result = copyOperations.pop();

      while (copyDigits.length === 0) {
        const digit = copyDigits.pop();
        const operation = copyOperations.pop() as string;
        const operFunc = mapOperation[operation];
        if (operation === '+') {
          result = add(Number(result), Number(digit)).toString();
        }
      }
    }

    if (total.length === 0 || ['X', '/', '-', '+'].includes(total.at(-1) as string)) {
      window.alert('숫자를 먼저 입력바람');
      return;
    }

    setTotal(prev => (prev += value));
    setDigits(prev => [...prev, currentInput]);
    setOperations(prev => [...prev, value]);
    setCurrentInput('');
  };

  console.log(currentInput);

  return (
    <div className="calculator">
      <Total total={total} />
      <Digits handleDigits={handleDigits} />
      <Modifier />
      <Operations handleOperations={handleOperations} />
    </div>
  );
}

export default Calculator;
