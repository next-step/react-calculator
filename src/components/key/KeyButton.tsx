import { Digits } from './Digits';
import Operations from './Operations';
import Modifiers from './Modifiers';

interface KeyProps {
  className: string;
  onClick: () => void;
  label: string;
}

export function KeyButton({ className, onClick, label }: KeyProps) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

const Key = Object.assign({
  Digits,
  Modifiers,
  Operations,
});

export default Key;
