interface OperateButtonProps {
  operator: string;
  onClick: (operator: string) => void;
}

export default function OperatorButton({
  operator,
  onClick,
}: OperateButtonProps) {
  return (
    <button className="operation" onClick={() => onClick(operator)}>
      {operator}
    </button>
  );
}
