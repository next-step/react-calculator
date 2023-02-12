/***
 * 이전에 아무 값도 안눌림 (init)
 *  * 현재 숫자를 누름: 누적값 변경없음 / 현재값 숫자로 업데이트
 *  * 현재 오퍼레이션을 누름: 누적값 변경없음 / 현재값 변경없음
 *
 * 이전에 숫자가 눌림
 *  * 현재 숫자를 누름: 누적값 변경없음 / 현재값 + 눌린 숫자
 *  * 현재 오퍼레이션을 누름: 누적값 + 현재값 / 현재값은 누적값으로 업데이트
 *
 * 이전에 오퍼레이션이 눌림
 *  * 현재 숫자를 누름: 누적값 변경없음  / 현재값은 눌린 값으로 업데이트
 *  * 현재 오퍼레이션을 누름: 누적값 변경없음 / 현재값 변경없음
 *
 */

import React, {useState} from "react";
import {OperatorionsType} from "../components/Calculator/Calculator";
import {getTotal} from "../utils/calculate";

interface InitialValue {}

export function useCalculate(): [any, any, any] {
  const MAXIUM_LENGTH = 3;
  const NUBMER_REGEX = /\d/g;
  const OPERATOR_REGEX = /\+|-|\/|\*|=/g;
  const [reducer, setReducer] = useState<[null | number, number]>([null, 0]);
  const [cachePreviousValue, setCachePreviousValue] = useState("");
  const [cacheOperation, setCacheOperation] = useState<null | OperatorionsType>(
    null
  );

  const onPressValue = (value: any) => {
    console.log(OPERATOR_REGEX.test(value.toString()));
    const numeric = value.toString().match(NUBMER_REGEX);
    const operator = value.toString().match(OPERATOR_REGEX);

    if (OPERATOR_REGEX.test(value.toString())) {
      setOperator(value);
    } else {
      setOperand(value);
    }
  };

  const isPreviousValueOperator = () => {
    return !!OPERATOR_REGEX.test(cachePreviousValue);
  };

  const setOperand = (operand: number) => {
    const [total, current] = reducer;
    const stringOperand = operand.toString();

    setCachePreviousValue(stringOperand);
    if (isPreviousValueOperator()) {
      setReducer([total, operand]);
      return;
    }

    const currentOperand = current + "" + stringOperand;
    if (currentOperand.length > MAXIUM_LENGTH) {
      return;
    }
    setReducer([total, Number(currentOperand)]);
  };

  const setOperator = (operation: OperatorionsType) => {
    const [total, current] = reducer;

    if (total === null) {
      setReducer([current, current]);
    } else {
      const currentTotal = getTotal({
        operation: cacheOperation || operation,
        total,
        current,
        isPreviousOperator: isPreviousValueOperator(),
      });
      setReducer([currentTotal, currentTotal]);
    }
    setCachePreviousValue(operation);
    setCacheOperation(operation);
  };

  const reset = () => {
    setReducer([null, 0]);
    setCachePreviousValue("");
    setCacheOperation(null);
  };

  return [reducer, onPressValue, reset];
}
