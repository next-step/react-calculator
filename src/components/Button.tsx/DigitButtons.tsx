import { DIGITS } from '../../common/constants';
import { ButtonBase } from './ButtonBase';

interface DigitButtonsProps {
  onClick: (digit: number) => void;
}

export function DigitButtons({ onClick }: DigitButtonsProps) {
  return (
    <div className="digits flex">
      {DIGITS.map(digit => (
        <ButtonBase
          key={digit}
          className="digit"
          label={`${digit}`}
          onClick={() => onClick(digit)}
        />
      ))}
    </div>
  );
}
