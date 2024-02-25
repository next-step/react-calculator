import { ButtonBase } from './ButtonBase';

interface ModifierButtonsProps {
  onClick: () => void;
}

export default function ModifierButtons({ onClick }: ModifierButtonsProps) {
  return (
    <div className="modifiers subgrid">
      <ButtonBase className="modifier" label="AC" onClick={onClick} />
    </div>
  );
}
