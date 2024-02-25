import { useRef, useState } from "react";
import { NumberButton } from "./components/NumberButton";
import { OperationButton } from "./components/OperationButton";
import { CALCULATOR_NUMBERS, OPERATION_REGEX } from "./constants";
import "./css/index.css";
import { EOPERATIONS } from "./enums";
import { calculateByOperator } from "./helper";

function App() {
  /**화면에 표시되는 수식들 */
  const [inputtedTotalValue, setInputtedTotalValue] = useState<string>("0");
  /**사용자가 현재 입력하고 있는 숫자 */
  const currNumber = useRef<string>();

  const handleClickNumberButton = (value: number) => {
    const _currNumber = currNumber.current;
    if (_currNumber?.length === 3) {
      alert("숫자는 세 자리까지만 입력 가능합니다!");
      return;
    }
    currNumber.current = _currNumber
      ? _currNumber + value.toString()
      : value.toString();

    setInputtedTotalValue((prev) =>
      prev === "0" || prev === "오류" ? `${value}` : `${prev}${value}`
    );
  };

  const handleClickOperationButton = (operator: keyof typeof EOPERATIONS) => {
    const lastInputtedValue = inputtedTotalValue[inputtedTotalValue.length - 1];
    /**최종 입력된 값이 숫자인지 연산자인지 */
    const isLastWordTypeNumber = !isNaN(+lastInputtedValue);

    /**연산을 위한 숫자와 연산자들이 담긴 배열 ex)['1','+','2'] */
    const arrItemsForCalc = inputtedTotalValue
      .split(OPERATION_REGEX)
      .filter(Boolean);

    /**최종 입력된 값이 연산자인 상태에서 숫자가 아닌 연산자(-를 제외한)를 입력받았을 때  */
    if (
      inputtedTotalValue === "0" ||
      (!isLastWordTypeNumber && operator !== "-") ||
      (lastInputtedValue === "-" && operator === "-")
    ) {
      alert("숫자를 먼저 입력한 후 연산자를 입력해주세요!");
      return;
    }

    if (operator === "-") {
      currNumber.current = operator;
    }

    /**식이 완성되지 않은 상태에서 =을 눌렀을때 */
    if (!(arrItemsForCalc.length >= 3) && operator === "=") {
      return;
    }

    const num1 = +arrItemsForCalc[0];
    const oper = arrItemsForCalc[1] as keyof typeof EOPERATIONS;
    const num2 =
      arrItemsForCalc[2] === "-" ? -+arrItemsForCalc[3] : +arrItemsForCalc[2];

    currNumber.current = undefined;
    if (operator === "=" && arrItemsForCalc.length >= 3) {
      const calculatedResult = calculateByOperator(
        oper,
        num1,
        num2
      )?.toString();

      if (calculatedResult === "Infinity") {
        setInputtedTotalValue("오류");
        currNumber.current = undefined;
        return;
      }

      setInputtedTotalValue(calculatedResult);
      currNumber.current = !!+calculatedResult ? calculatedResult : undefined;
    } else {
      setInputtedTotalValue((prev) => prev + operator);
    }
  };

  const handleClickAllClear = () => {
    currNumber.current = undefined;
    setInputtedTotalValue("0");
  };

  return (
    <>
      <div id="app">
        <div className="calculator">
          <h1 id="total">{inputtedTotalValue}</h1>
          <div className="digits flex">
            {[...CALCULATOR_NUMBERS].reverse().map((number, i) => (
              <NumberButton
                label={number}
                key={i}
                onClick={handleClickNumberButton}
              />
            ))}
          </div>
          <div className="modifiers subgrid">
            <button className="modifier" onClick={handleClickAllClear}>
              AC
            </button>
          </div>
          <div className="operations subgrid">
            {Object.values(EOPERATIONS).map((operation, i) => (
              <OperationButton
                label={operation}
                key={i}
                onClick={handleClickOperationButton}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
