type TProps = {
  label: string;
};

export const OperationButton = ({ label }: TProps) => {
  return <button className="operation">{label}</button>;
};
