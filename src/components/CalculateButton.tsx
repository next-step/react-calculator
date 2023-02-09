import React from 'react';

interface Props {
  onSummaryClick: () => void;
}

const CalculateButton = ({ onSummaryClick }: Props) => {
  return (
    <button className="operation" onClick={onSummaryClick}>
      =
    </button>
  );
};

export default CalculateButton;
