interface OperateButtonProps {
  operate: string;
  onOperatorClick: (operator: string) => void;
}

export default function OperateButton({
  operate,
  onOperatorClick,
}: OperateButtonProps) {
  const operatorButtonClickHandler = () => {
    onOperatorClick(operate);
  };

  return (
    <button className="operation" onClick={operatorButtonClickHandler}>
      {operate}
    </button>
  );
}
