type TProps = {
  label: number | string;
  onClick: (value: number) => void;
};

export const NumberButton = ({ label, onClick }: TProps) => {
  return (
    <button className="digit" onClick={() => onClick(+label)}>
      {label}
    </button>
  );
};
