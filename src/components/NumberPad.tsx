import { NUMBERS } from '@/constants/calculator';

type Props = {
  handleNumberClick: (number: string) => void;
};

export default function NumberPad({ handleNumberClick }: Props) {
  return (
    <div className="digits flex">
      {NUMBERS.map((number) => (
        <button key={number} onClick={() => handleNumberClick(number)}>
          {number}
        </button>
      ))}
    </div>
  );
}
