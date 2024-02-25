interface OperateButtonProps {
  operate: string;
  onOperatorClick: (operator: string) => void;
}

export default function OperateButton({
  operate,
  onOperatorClick,
}: OperateButtonProps) {
  const handleOperatorButton = () => {
    onOperatorClick(operate);
  };

  return (
    <button className="operation" onClick={handleOperatorButton}>
      {operate}
    </button>
  );
}
