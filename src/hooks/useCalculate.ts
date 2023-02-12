import React, { useReducer, useState } from 'react';

export const REDUCER_TYPE = {
  INPUT_DIGIT: 'INPUT_DIGIT',
  INPUT_OPERATOR: 'INPUT_OPERATOR',
  RESET_CURRENT_NUMBER: 'RESET_CURRENT_NUMBER',
  CALCULATE: 'CALCULATE',
  RESET: 'RESET',
} as const;
export const initialState = {
  total: '',
  beforeNumber: '',
  currentNumber: '',
  operator: '',
};

export type StateType = typeof initialState;

export type ActionType = {
  type: keyof typeof REDUCER_TYPE;
  payload?: any;
  //TODO: payload로 string 값을 보낼 때가 있고 StateType으로 보낼 때가 있음
  // 한 가지로 통일시키는 것이 필요함
};

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case REDUCER_TYPE.INPUT_DIGIT:
      return { ...state, ...action.payload };
    case REDUCER_TYPE.INPUT_OPERATOR:
      return { ...state, ...action.payload };
    case REDUCER_TYPE.RESET_CURRENT_NUMBER:
      return {
        ...state,
        currentNumber: initialState.currentNumber,
      };
    case REDUCER_TYPE.CALCULATE:
      return {
        total: initialState.total,
        beforeNumber: initialState.beforeNumber,
        currentNumber: action.payload,
        operator: initialState.operator,
      };
    case REDUCER_TYPE.RESET:
      return initialState;
    default:
      return state;
  }
};

const useCalculate = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    dispatch,
  };
};

export default useCalculate;
