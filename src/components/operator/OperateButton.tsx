interface OperateButtonProps {
  operate: string;
  onClick: (operator: string) => void;
}

export default function OperateButton({
  operate,
  onClick,
}: OperateButtonProps) {
  const handleOperatorButton = () => {
    onClick(operate);
  };

  return (
    <button className="operation" onClick={handleOperatorButton}>
      {operate}
    </button>
  );
}
