import { FC } from "react";

type Props = {
  digitNumber: string;
  onClick: (digitNumber: string) => void;
};

const DigitNumber: FC<Props> = ({ digitNumber, onClick }) => {
  const handleDigitClick = () => {
    onClick(digitNumber);
  };

  return (
    <button className="digit" onClick={handleDigitClick}>
      {digitNumber}
    </button>
  );
};

export default DigitNumber;
