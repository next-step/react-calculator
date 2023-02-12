import { OPERATORS } from "../constants";

type Props = {
  operate: (operator: any) => void;
};

export const Operation = ({ operate }: Props) => {
  return (
    <>
      <div className="operations subgrid" onClick={operate}>
        {OPERATORS.map((operator) => (
          <button key={operator} value={operator}>
            {operator}
          </button>
        ))}
      </div>
    </>
  );
};
