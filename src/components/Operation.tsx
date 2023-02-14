import { OPERATORS } from "constant";

type Props = {
  operate: (operator: any) => void;
};

export const Operation = ({ operate }: Props) => {
  return (
    <>
      <div className="operations subgrid">
        {OPERATORS.map((operator) => (
          <button key={operator} value={operator} onClick={operate}>
            {operator}
          </button>
        ))}
      </div>
    </>
  );
};
