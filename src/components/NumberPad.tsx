const DIGITS = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] as const;

type Props = {
  onClickDigit: (event: any) => void;
};

export const NumberPad = ({ onClickDigit }: Props) => {
  return (
    <div className="digits flex" >
      {DIGITS.map((number) => {
        return (
          <button className="digit" key={number} value={number} onClick={onClickDigit}>
            {number}
          </button>
        );
      })}
    </div>
  );
};
