import React, {useState} from "react";
import "./App.css";

/**
 * - calculator
 *    - digits
 *      - digit (상태변화 필요없음), 이벤트 전파만 필요
 *    - ** total, reducer랑 연관있음 **
 *    - operations ()
 *      - operation (이전에 눌린값 액티브 필요)
 * - hooks
 *    - reducer
 *      - [누적값, 현재값]
 *      - 오퍼레이터
 *      - 현재 눌린 값
 */

type Operator = "+" | "-" | "/" | "*" | "=";

function App() {
  const [result, setResult] = useState<string>("0");
  const [temp, setTemp] = useState<string | null>(null);
  const [beforeOperation, setBeforeOperation] = useState<Operator | null>(null);
  const [isActiveOperation, setIsActiveOperation] = useState<Boolean>(false);

  const calcurate = (operator: Operator) => {
    if (!isActiveOperation) {
      setIsActiveOperation(true);
    }

    setBeforeOperation(operator);

    // **현재 기능동작: -랑 / 값 다시 살펴보기**
    // 0이 있다고 생각되어서 이렇게 되는 듯: 초기값설정 필요,, 500 - 일 때, -500되는거 해결하기

    // result, temp값 따로 받기, TODO: util로 빼기
    const getTotal = (operator: Operator): number | any => {
      // TODO: 이전에 operation이 눌려져 있는 경우에는, 이전값을 리턴한다 (알아보기 힘들지 않을까?)
      if (temp === null || isActiveOperation) {
        return Number(result);
      }

      switch (operator) {
        case "+":
          return Number(temp) + Number(result);
        case "-":
          return Number(temp) - Number(result);
        case "*":
          return Number(temp) * Number(result);
        case "/":
          return Math.floor(Number(temp) / Number(result));
        case "=":
          // TODO: =를 눌렀을 경우에는, 이전에 눌려져 있는 오퍼레이션으로 계산한다
          // **만약 beforeOperation이 없으면? <- 처리 필요**
          if (beforeOperation) {
            return getTotal(beforeOperation);
          }
          return Number(result);
      }
    };

    // TODO: 정리필요, result값은 순수하게 저장하고 에러처리는 템플릿에서 하기
    const total = getTotal(operator);
    console.log(total);
    const errors = [Infinity, -Infinity];
    setTemp(errors.includes(total) ? "오류" : total.toString());
    setResult(errors.includes(total) ? "오류" : total.toString());
  };

  const resetResult = () => {
    setResult("0");
    setTemp(null);
    setIsActiveOperation(false);
  };

  const setOperand = (numeric: string) => {
    const current = Number(result + numeric);
    // 이전에 눌린값이 operation이라면, result값은 현재 눌린 값으로 리턴
    // 알아보기 쉽게 만들기
    console.log(isActiveOperation);
    if (isActiveOperation) {
      setResult(numeric);
      setIsActiveOperation(false);
      return;
    }
    // string으로 받을까 number로 받을까 고민 필요
    if (current.toString().length > 3) {
      return;
    }
    setResult(current.toString());
  };

  return (
    <div id="app">
      <div className="calculator">
        <h1 id="total">{result}</h1>
        <div className="digits flex">
          <button className="digit" onClick={() => setOperand("9")}>
            9
          </button>
          <button className="digit" onClick={() => setOperand("8")}>
            8
          </button>
          <button className="digit" onClick={() => setOperand("7")}>
            7
          </button>
          <button className="digit" onClick={() => setOperand("6")}>
            6
          </button>
          <button className="digit" onClick={() => setOperand("5")}>
            5
          </button>
          <button className="digit" onClick={() => setOperand("4")}>
            4
          </button>
          <button className="digit" onClick={() => setOperand("3")}>
            3
          </button>
          <button className="digit" onClick={() => setOperand("2")}>
            2
          </button>
          <button className="digit" onClick={() => setOperand("1")}>
            1
          </button>
          <button className="digit" onClick={() => setOperand("0")}>
            0
          </button>
        </div>
        <div className="modifiers subgrid">
          <button className="modifier" onClick={resetResult}>
            AC
          </button>
        </div>
        <div className="operations subgrid">
          <button className="operation" onClick={() => calcurate("/")}>
            /
          </button>
          <button className="operation" onClick={() => calcurate("*")}>
            X
          </button>
          <button className="operation" onClick={() => calcurate("-")}>
            -
          </button>
          <button className="operation" onClick={() => calcurate("+")}>
            +
          </button>
          <button className="operation" onClick={() => calcurate("=")}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
