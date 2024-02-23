type TProps = {
  label: number | string;
};

export const NumberButton = ({ label }: TProps) => {
  return <button className="digit">{label}</button>;
};
