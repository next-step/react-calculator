interface NumbersProps {
  numHandler: (num: number) => void;
}

const LIMIT_COUNT = 10;

const NUMBER_ARRAY = Array.from(
  { length: LIMIT_COUNT },
  (_, index) => index
).reverse();

const Numbers = (props: NumbersProps) => {
  const { numHandler } = props;

  return (
    <div className="digits flex">
      {NUMBER_ARRAY.map((number) => (
        <button
          key={number.toString()}
          className="digit"
          onClick={() => numHandler(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Numbers;
