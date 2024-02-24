import type { CalculatorKeyConfig, ButtonColorScheme } from '@/components';
import { Button, CalculatorKeyType } from '@/components';

type CalculatorKeyLayoutProps = {
  className?: string;
  keys: CalculatorKeyConfig[];
  onKeyClick: (value: string | number) => void;
};

export const CalculatorKeyLayout = ({ className, keys, onKeyClick }: CalculatorKeyLayoutProps) => (
  <div className={className}>
    {keys.map(({ type, value, label }) => {
      const colorScheme = getButtonColorScheme(type);
      const handleButtonClick = () => {
        onKeyClick(value);
      };
      return (
        <Button colorScheme={colorScheme} onClick={handleButtonClick}>
          {label}
        </Button>
      );
    })}
  </div>
);

const getButtonColorScheme = (type: CalculatorKeyType) => {
  const schemes: Record<CalculatorKeyType, ButtonColorScheme> = {
    [CalculatorKeyType.DigitKey]: 'basic',
    [CalculatorKeyType.OperatorKey]: 'accent',
    [CalculatorKeyType.AllClearKey]: 'light',
  };
  return schemes[type];
};
