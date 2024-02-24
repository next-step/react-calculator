import { KeyButton } from './KeyButton';

interface ModifierProps {
  onClick: () => void;
}

export default function Modifiers({ onClick }: ModifierProps) {
  return (
    <div className="modifiers subgrid">
      <KeyButton className="modifier" label="AC" onClick={onClick} />
    </div>
  );
}
