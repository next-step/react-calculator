import { EOPERATIONS } from "../enums";

type TProps = {
  label: keyof typeof EOPERATIONS;
  onClick: (operation: keyof typeof EOPERATIONS) => void;
};

export const OperationButton = ({ label, onClick }: TProps) => {
  return (
    <button className="operation" onClick={() => onClick(label)}>
      {label}
    </button>
  );
};
