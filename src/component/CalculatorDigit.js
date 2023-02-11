import CalculatorDigitItem from "./CalculatorDigitItem";
const DIGIT = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];

const CalculatorDigit = ({ totalState, countState }) => {
  const onClickNumber = (num) => {
    countNumber();
    if (totalState.total === "0") {
      totalState.setTotal(num);
    } else {
      totalState.setTotal(totalState.total + num);
    }
  };

  const countNumber = () => {
    if (countState.count > 3) {
      alert("숫자는 세 자리까지만 입력 가능합니다!");
      return;
    }

    countState.setCount(() => countState.count + 1);
  };

  return (
    <div className="digits flex">
      {DIGIT.map((num) => (
        <CalculatorDigitItem
          number={num}
          key={num}
          onClick={() => onClickNumber(num)}
        />
      ))}
    </div>
  );
};

export default CalculatorDigit;
