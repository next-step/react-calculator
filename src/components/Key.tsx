interface KeyProps {
  className: string;
  onClick: () => void;
  label: string;
}

export default function Key({ className, onClick, label }: KeyProps) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}
