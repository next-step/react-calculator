interface KeyProps {
  className: string;
  onClick: () => void;
  label: string;
}

export default function KeyButton({ className, onClick, label }: KeyProps) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}
