import { useState, MouseEvent } from 'react';
import Digits from './Digits';
import Modifier from './Modifier';
import Operations from './Operations';
import Total from './Total';
import './calculator.css';

const add = (a: number, b: number) => {
  if (!b || b === undefined) {
    b = 0;
  }
  return a + b;
};

const sub = (a: number, b: number) => {
  if (!b || b === undefined) {
    b = 0;
  }
  return a - b;
};

const mul = (a: number, b: number) => {
  if (!b || b === undefined) {
    b = 1;
  }

  return a * b;
};

const dev = (a: number, b: number) => {
  if (!b || b === undefined) {
    b = 1;
  }

  return a / b;
};

const mapOperation: Record<string, (a: number, b: number) => number> = {
  '+': add,
  '-': sub,
  X: mul,
  '/': dev,
};

function Calculator() {
  const [total, setTotal] = useState('');
  const [currentInput, setCurrentInput] = useState('');
  const [digits, setDigits] = useState<string[]>([]);
  const [operations, setOperations] = useState<string[]>([]);

  // const total = digits.map((digit, index) => `${digit}${operations[index] ?? ''}`).join('');

  const handleDigits = (e: MouseEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) return;

    if (currentInput.length >= 3) {
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
      const copyDigits = [...digits, currentInput];

      let result = copyDigits.shift();

      while (copyOperations.length !== 0) {
        const digit = copyDigits.shift();
        const operation = copyOperations.shift() as string;
        const operFunc = mapOperation[operation];

        result = Math.floor(operFunc(Number(result), Number(digit))).toString();
      }

      setTotal(result as string);
      setCurrentInput(result as string);
      setDigits([]);
      setOperations([]);
      return;
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

  const handleModifier = () => {
    setTotal('');
    setDigits([]);
    setOperations([]);
    setCurrentInput('');
  };

  return (
    <div className="calculator">
      <Total total={total} />
      <Digits handleDigits={handleDigits} />
      <Modifier handleModifier={handleModifier} />
      <Operations handleOperations={handleOperations} />
    </div>
  );
}

export default Calculator;
