import { DigitButtons } from './DigitButtons';
import OperationButtons from './OperationButtons';
import ModifierButtons from './ModifierButtons';

interface ButtonBaseProps {
  className: string;
  onClick: () => void;
  label: string;
}

export function ButtonBase({ className, onClick, label }: ButtonBaseProps) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

const Button = Object.assign({
  Digits: DigitButtons,
  Modifiers: ModifierButtons,
  Operations: OperationButtons,
});

export default Button;
