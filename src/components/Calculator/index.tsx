import { useRef, useState } from "react";

import { operations } from "@/util/calculateService";
import {
  CalculateOperators,
  MAX_NUM_OF_NUMBERS,
  MAX_NUMBER_LENGTH,
} from "@/util/constants";
import errorMessage from "@/util/errorMessage";

import DigitButtons from "./DigitButtons";
import styles from "./index.module.css";
import ModifierButton from "./ModifierButton";
import OperatorButtons from "./OperatorButtons";
import ResultPanel from "./ResultPanel";

// eslint-disable-next-line no-useless-escape
const operatorRegex = /[\+-\/X]/g;

export default function Calculator() {
  const [resultPanel, setResultPanel] = useState("");

  const currentInputNumber = useRef("");

  const inputNumbers = resultPanel.split(operatorRegex);
  const curOperator = resultPanel.match(operatorRegex) as [CalculateOperators];

  function handleDigitButtonClick(buttonValue: number) {
    if (currentInputNumber.current.length >= MAX_NUMBER_LENGTH) {
      alert(errorMessage.OVER_MAX_NUMBER_LENGTH);
      return;
    }

    currentInputNumber.current += `${buttonValue}`;
    setResultPanel((prev) => `${prev}${buttonValue}`);
  }

  function handleCalculateButtonClick(buttonValue: CalculateOperators) {
    if (resultPanel === "") {
      alert(errorMessage.CAL_WITH_EMPTY_NUMBER);
      return;
    }

    if (inputNumbers.length >= MAX_NUM_OF_NUMBERS) {
      alert(errorMessage.OVER_MAX_NUM_OF_NUMBERS);
    } else {
      currentInputNumber.current = "";
      setResultPanel((prev) => `${prev}${buttonValue}`);
    }
  }

  function handleResultButtonClick() {
    if (!curOperator) return;

    const [num1, num2] = inputNumbers.map(Number);
    const calculateResult = operations[curOperator[0]](num1, num2);
    const resultOnResultPanel = Number.isNaN(calculateResult)
      ? errorMessage.INVALID_RESULT
      : String(calculateResult);

    currentInputNumber.current = resultOnResultPanel;
    setResultPanel(resultOnResultPanel);
  }

  function handleAllClearBtnClick() {
    setResultPanel("");
    currentInputNumber.current = "";
  }

  return (
    <div className={styles.calculator}>
      <ResultPanel resultPanel={resultPanel} />
      <ModifierButton onClickModifier={handleAllClearBtnClick} />
      <DigitButtons onClickDigit={handleDigitButtonClick} />
      <OperatorButtons
        onClickCalculateButton={handleCalculateButtonClick}
        onClickResultButton={handleResultButtonClick}
      />
    </div>
  );
}
