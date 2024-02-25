import { useContext } from 'react';
import {
  CalculatorDispatchContext,
  CalculatorStateContext,
} from '../contexts/CalculatorContext';

export function useCalculatorState() {
  const state = useContext(CalculatorStateContext);
  if (state === null) {
    throw new Error("Can't find CalculatorStateContext");
  }
  return state;
}

export function useCalculatorDispatch() {
  const dispatch = useContext(CalculatorDispatchContext);
  if (dispatch === null) {
    throw new Error("Can't find CalculatorDispatchContext");
  }
  return dispatch;
}
