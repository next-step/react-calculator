import React from 'react';

const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

interface DigitNumbersProps {
  isNeedInitStateBundle: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  currentNumberStateBundle: [string, React.Dispatch<React.SetStateAction<string>>];
}

function DigitNumbers({
  isNeedInitStateBundle,
  currentNumberStateBundle,
}: DigitNumbersProps) {
  const [isNeedInit, setIsNeedInit] = isNeedInitStateBundle;
  const [currentNumber, setCurrentNumber] = currentNumberStateBundle;

  return (
    <div className='digits flex'>
      {numbers.map((number) => (
        <button key={`digit-${number}`} className='digit' onClick={() => {
          const stringNumber = String(number);
          if (isNeedInit) {
            setIsNeedInit(false);
            return setCurrentNumber(stringNumber);
          }

          if (currentNumber.length >= 3) return;

          setCurrentNumber(currentNumber + stringNumber);
        }}>
          {number}
        </button>)
      )}
    </div>
  );
}

export { DigitNumbers };
