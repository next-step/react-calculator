interface OperateButtonProps {
  operate: string;
}

export default function OperateButton({ operate }: OperateButtonProps) {
  return <button className="operation">{operate}</button>;
}
