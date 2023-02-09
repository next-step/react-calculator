import { useRef, useState } from "react";

import {
  CalculateOperators,
  MAX_NUM_OF_NUMBERS,
  MAX_NUMBER_LENGTH,
  Operators,
} from "@/util/constants";
import { doOperate } from "@/util/helper";
import messages from "@/util/messages";

import DigitButtons from "./DigitButtons";
import styles from "./index.module.css";
import ModifierButton from "./ModifierButton";
import OperatorButtons from "./OperatorButtons";
import ResultPanel from "./ResultPanel";

// eslint-disable-next-line no-useless-escape
const operatorRegex = /[\+-\/X]/g;

export default function Calculator() {
  const [resultPanel, setResultPanel] = useState("");

  const curNumber = useRef("");

  const inputNumbers = resultPanel.split(operatorRegex);
  const curOperator = resultPanel.match(operatorRegex) as [CalculateOperators];

  function handleDigitButtonClick(buttonValue: number) {
    if (curNumber.current.length >= MAX_NUMBER_LENGTH) {
      alert(messages.OVER_MAX_NUMBER_LENGTH);
      return;
    }

    curNumber.current += `${buttonValue}`;
    setResultPanel((prev) => `${prev}${buttonValue}`);
  }

  function handleOperatorButtonClick(buttonValue: Operators) {
    if (buttonValue !== "=" && resultPanel === "") {
      alert(messages.CAL_WITH_EMPTY_NUMBER);
      return;
    }

    if (buttonValue === "=") {
      if (!curOperator) return;

      const [num1, num2] = inputNumbers.map((number) => Number(number));
      const result = String(doOperate(num1, num2, curOperator[0]));

      curNumber.current = result;
      setResultPanel(result);
    } else if (inputNumbers.length >= MAX_NUM_OF_NUMBERS) {
      alert(messages.OVER_MAX_NUM_OF_NUMBERS);
    } else {
      curNumber.current = "";
      setResultPanel((prev) => `${prev}${buttonValue}`);
    }
  }

  function handleAllClearBtnClick(buttonValue: string) {
    if (buttonValue !== "AC") return;

    setResultPanel("");
    curNumber.current = "";
  }

  return (
    <div className={styles.calculator}>
      <ResultPanel calculateQueue={resultPanel} />
      <ModifierButton onClickModifier={handleAllClearBtnClick} />
      <DigitButtons onClickDigit={handleDigitButtonClick} />
      <OperatorButtons onClickOperator={handleOperatorButtonClick} />
    </div>
  );
}
