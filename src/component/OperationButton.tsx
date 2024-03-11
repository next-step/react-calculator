import { FC } from "react";

type Props = {
  operator: string;
  onClick: (digitNumber: string) => void;
};

const OperatorButton: FC<Props> = ({ operator, onClick }) => {
  const handleOperatorClick = () => {
    onClick(operator);
  };

  return (
    <button className="digit" onClick={handleOperatorClick}>
      {operator}
    </button>
  );
};

export default OperatorButton;
