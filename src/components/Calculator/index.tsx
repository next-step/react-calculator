import { useRef, useState } from "react";

import { MAX_NUMBER_LENGTH } from "@/util/constants";
import messages from "@/util/messages";

import DigitButtons from "./DigitButtons";
import styles from "./index.module.css";
import ModifierButton from "./ModifierButton";
import OperatorButtons from "./OperatorButtons";
import ResultPanel from "./ResultPanel";

export default function Calculator() {
  const [digitQueue, setDigitQueue] = useState("");
  const tempNumber = useRef("");

  function handleDigitButtonClick(buttonValue: number) {
    if (tempNumber.current.length >= MAX_NUMBER_LENGTH) {
      alert(messages.OVER_MAX_NUMBER_LENGTH);
      return;
    }

    tempNumber.current += String(buttonValue);
    setDigitQueue((prev) => `${prev}${buttonValue}`);
  }

  function handleOperatorButtonClick(buttonValue: string) {
    if (buttonValue !== "=" && digitQueue === "") {
      alert(messages.CAL_WITH_EMPTY_NUMBER);
      return;
    }

    if (buttonValue === "=") {
      // 계산
    } else {
      setDigitQueue((prev) => `${prev}${buttonValue}`);
      tempNumber.current = "";
    }
  }

  function handleAllClearBtnClick(buttonValue: string) {
    if (buttonValue !== "AC") return;

    setDigitQueue("");
    tempNumber.current = "";
  }

  return (
    <div className={styles.calculator}>
      <ResultPanel calculateQueue={digitQueue} />
      <ModifierButton onClickModifier={handleAllClearBtnClick} />
      <DigitButtons onClickDigit={handleDigitButtonClick} />
      <OperatorButtons onClickOperator={handleOperatorButtonClick} />
    </div>
  );
}
