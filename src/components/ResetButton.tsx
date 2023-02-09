import React from 'react';

interface Props {
  onReset: () => void;
}

const ResetButton = ({ onReset }: Props) => {
  return (
    <button className="modifier" onClick={onReset}>
      AC
    </button>
  );
};

export default ResetButton;
