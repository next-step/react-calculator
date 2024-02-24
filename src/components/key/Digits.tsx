import { DIGITS } from '../../common/constants';
import { KeyButton } from './KeyButton';

interface DigitsProps {
  onClick: (digit: number) => void;
}

export function Digits({ onClick }: DigitsProps) {
  return (
    <div className="digits flex">
      {DIGITS.map(digit => (
        <KeyButton
          key={digit}
          className="digit"
          label={`${digit}`}
          onClick={() => onClick(digit)}
        />
      ))}
    </div>
  );
}
