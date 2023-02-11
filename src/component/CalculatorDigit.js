import CalculatorDigitItem from "./CalculatorDigitItem";

const CalculatorDigit = () => {
  const range = (start, end) => {
    let array = [];
    for (let i = start; i <= end; i++) {
      array.push(i);
    }
    return array;
  };

  return (
    <div className="digits flex">
      {range(0, 9)
        .reverse()
        .map((num) => (
          <CalculatorDigitItem number={num} key={num} />
        ))}
    </div>
  );
};

export default CalculatorDigit;
