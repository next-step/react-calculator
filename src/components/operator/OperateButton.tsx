interface OperateButtonProps {
  operate: string;
  onClick: (operator: string) => void;
}

export default function OperateButton({
  operate,
  onClick,
}: OperateButtonProps) {
  return (
    <button className="operation" onClick={() => onClick(operate)}>
      {operate}
    </button>
  );
}
