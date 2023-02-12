import React, { useState } from 'react';

const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] as const;

interface DigitNumbersProps {
  isNeedInitStateBundle: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  currentNumberStateBundle: ReturnType<typeof useState<string>>;
}

function DigitNumbers({
  isNeedInitStateBundle,
  currentNumberStateBundle,
}: DigitNumbersProps) {
  const [isNeedInit, setIsNeedInit] = isNeedInitStateBundle;
  const [currentNumber, setCurrentNumber] = currentNumberStateBundle;

  const resetCurrentNumberIfIsNeedInit = (digitNumber: string) => {
    const isInit = isNeedInit || !currentNumber;
    if (isInit) {
      setIsNeedInit(false);
      setCurrentNumber(digitNumber);
    }
    return isInit;
  }

  const checkIsMaximumCurrentNumberLength = () => {
    return !currentNumber || currentNumber.length >= 3;
  }

  const digitButtonClickHandler = (number: number) => () => {
    const digitNumber = String(number);

    if (resetCurrentNumberIfIsNeedInit(digitNumber)) return;
    if (checkIsMaximumCurrentNumberLength()) return;

    setCurrentNumber((prev) => prev + digitNumber);
  };

  return (
    <div className='digits flex'>
      {numbers.map((number) => (
        <button key={`digit-${number}`} className='digit' onClick={digitButtonClickHandler(number)}>
          {number}
        </button>)
      )}
    </div>
  );
}

export { DigitNumbers };
